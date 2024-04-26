import "./style.css"
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { FormEvent, useState, useEffect } from "react";
import { FormDataDados } from "@/interface/form-data.interface";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from "axios";

interface Props {
    sendDataToParent: (data: FormDataDados) => void;
}
interface Nacionalidade {
    id: Number,
    nacionalidade: string
}
export default function Dados({ sendDataToParent }: Props) {

    const [nome, setNome] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [rg, setRg] = useState<string>("")
    const [genero, setGenero] = useState<string>("")
    const [data, setData] = useState<string>("")
    const [escolaridade, setEscolaridade] = useState<string>("")
    const [nacionalidade, setNacionalide] = useState<string>("Brasileiro")
    const [nacionalidadeId, setNacionalideId] = useState<number>(0)
    const [sequencia, setSequencia] = useState<string>("")
    const [validadeCpf, setValidadeCpf] = useState<boolean | null>(null)
    const [corInputCpf, setCorInputCpf] = useState<string>("")
    const [textCpf, setTextCpf] = useState<string>("CPF")
    const [erroDados, setErroDados] = useState<string>("")
    const [nacionalidadeData, setNacionalideData] = useState<Nacionalidade[]>()

    useEffect(() => {
        if (cpf !== "" && validadeCpf === false) {
            mudarCorInput()
        }
        if (nacionalidade !== "Brasileiro" && nacionalidade !== "") {
            setTextCpf("Número do Passaporte")
        } else {
            setTextCpf("CPF")
        }
        const carregarNoticias = async () => {
            try {
                const response = await axios.get<Nacionalidade[]>('http://192.168.1.90:3030/nacionalidade');
                setNacionalideData(response.data)
            } catch (error) {
                console.error("Erro ao carregar nacionalidades: ", error)
            }
        }
    }, [cpf, nacionalidade])

    const EnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (nacionalidade === "Brasileiro") {
            if (validadeCpf === true) {
                sendDataToParent({ nome, cpf, rg, genero, data, escolaridade, nacionalidadeId })
            } else {
                setErroDados("Existem campos incorretos, é necessário fazer as correções antes de enviar !")
            }
        } else {
            if (cpf !== "") {
                sendDataToParent({ nome, cpf, rg, genero, data, escolaridade, nacionalidadeId })
            } else {
                setErroDados("Existem campos que não foram preenchidos !")
            }
        }

    }

    const FormataCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
        setCpf(value);
        console.log(cpf)
    };

    const validarCpf = (cpfValue: string) => {
        var soma = 0;
        var resto;
        var inputCPF = cpfValue;

        if (inputCPF == '00000000000') return false;

        for (let i = 1; i <= 9; i++) {
            soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(inputCPF.substring(9, 10))) return false;

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i)
        }
        resto = (soma * 10) % 11;

        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(inputCPF.substring(10, 11))) return false;
        return true;
    };

    const validarCpfSequenciasNumercas = (value: string): boolean => {
        if (/^(\d)\1+$/.test(value)) {
            console.log("cpf invalidado por numeros sequenciais")
            return false
        } else {
            setSequencia(value)
            console.log("cpf valido os numeros nao sao sequenciais")
            return true
        }
    }

    const ProcessaCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        const cpfValue = event.target.value;
        if (validarCpf(cpfValue)) {
            console.log('CPF válido pela soma');
            if (validarCpfSequenciasNumercas(cpfValue)) {
                FormataCpf(event)
                setValidadeCpf(true)
                setCorInputCpf("")
            }
        } else {
            console.log('CPF inválido pela soma');
            setValidadeCpf(false)
        }
    };

    const mudarCorInput = () => {
        if (cpf.length >= 11) {
            setCorInputCpf("red")
            setTextCpf("CPF INVALIDO")
        } else {
            setTextCpf("CPF")
            setCorInputCpf("")
        }
    }

    const FormataRg = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, "");
        if (value.length <= 11) {

            value = value.replace(/(\d{2})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{2})(\d{1,2})$/, "$1-$2");
        }
        setRg(value);
    };

    return (
        <div className="BoxFormDados">
            <form className="DivDadosForm" onSubmit={EnviarFormulario}>
                <FormControl className="FormControl" defaultChecked>
                    <InputLabel id="escolaridade-label" size="small">Nacionalidade</InputLabel>
                    <Select
                        size="small"
                        labelId="nacionalidade-label"
                        id="nacionalidade-select"
                        value={nacionalidade}
                        label="Nacionalidade"
                        onChange={(e) => {
                            setNacionalide(e.target.value as string);
                        }}

                    >
                        {nacionalidadeData?.map((objeto) => (
                            <MenuItem key={objeto.nacionalidade} value={objeto.nacionalidade}>{objeto.nacionalidade}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl
                    className="FormControl"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: corInputCpf,
                            },
                        },
                        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                            color: corInputCpf,
                        },
                    }}
                    variant="outlined"
                    onChange={ProcessaCpf}
                    required
                >
                    <InputLabel htmlFor="outlined-adornment-password" size="small">{textCpf}</InputLabel>
                    <OutlinedInput value={cpf} onChange={(e) => setCpf(e.target.value)}
                        type={'text'}
                        size="small"
                        inputProps={{
                            maxLength: 14,
                        }}
                        label={textCpf} />
                </FormControl>
                <FormControl className="FormControl" variant="outlined" required>
                    <InputLabel htmlFor="outlined-adornment-password" size="small">Nome Completo</InputLabel>
                    <OutlinedInput value={nome} onChange={(e) => setNome(e.target.value)}
                        type={'text'}
                        size="small"
                        label="Nome Completo" />
                </FormControl>
                <FormControl className="FormControl" variant="outlined" onChange={FormataRg} required>
                    <InputLabel htmlFor="outlined-adornment-password" size="small">RG</InputLabel>
                    <OutlinedInput value={rg} onChange={(e) => setRg(e.target.value)}
                        type={'text'}
                        size="small"
                        inputProps={{
                            maxLength: 13,
                        }}
                        label="RG" />
                </FormControl>
                <div className="agrupamentoInput">
                    <FormControl className="InputGenero" required defaultChecked>
                        <InputLabel id="escolaridade-label" size="small">Genero</InputLabel>
                        <Select
                            size="small"
                            labelId="escolaridade-label"
                            id="escolaridade-select"
                            value={genero}
                            label="Escolaridade"
                            onChange={(e) => setGenero(e.target.value as string)}>
                            <MenuItem value="" disabled>
                                Escolha uma opção
                            </MenuItem>
                            <MenuItem value="masculino">Masculino</MenuItem>
                            <MenuItem value="feminino">Feminino</MenuItem>
                            <MenuItem value="indeterminado">Indeterminado</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1 }} variant="outlined" defaultChecked>
                        <InputLabel htmlFor="outlined-adornment-password" size="small"
                        ></InputLabel>
                        <OutlinedInput value={data} onChange={(e) => setData(e.target.value)}
                            size="small"
                            type={'date'}
                            style={{ color: '#6A6B6B' }} />
                    </FormControl>
                </div>
                <FormControl className="FormControl" required>
                    <InputLabel id="escolaridade-label" size="small">Escolaridade</InputLabel>
                    <Select
                        size="small"
                        labelId="escolaridade-label"
                        id="escolaridade-select"
                        value={escolaridade}
                        label="Escolaridade"
                        onChange={(e) => setEscolaridade(e.target.value as string)}
                        className="FormSelect"
                    >
                        <MenuItem value="" disabled>
                            Escolha uma opção
                        </MenuItem>
                        <MenuItem value="ensino_fundamental">Ensino Fundamental</MenuItem>
                        <MenuItem value="ensino_medio">Ensino Médio</MenuItem>
                        <MenuItem value="ensino_superior">Ensino Superior</MenuItem>
                        <MenuItem value="pos_graduacao">Pós-graduação</MenuItem>
                        <MenuItem value="mestrado">Mestrado</MenuItem>
                        <MenuItem value="doutorado">Doutorado</MenuItem>
                        <MenuItem value="pos_doutorado">Pós-doutorado</MenuItem>
                    </Select>
                </FormControl>

                <input type="submit" value="Continuar" className="InputDados" id="InputDados" />

            </form>
        </div>
    )
}