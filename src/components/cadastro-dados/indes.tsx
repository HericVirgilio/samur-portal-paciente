import "./style.css"
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { FormEvent, useState } from "react";
import { FormDataDados } from "@/interface/form-data.interface";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

interface Props {
    sendDataToParent: (data: FormDataDados) => void;
}

export default function Dados({ sendDataToParent }: Props) {

    const [nome, setNome] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [rg, setRg] = useState<string>("")
    const [genero, setGenero] = useState<string>("")
    const [data, setData] = useState<string>("")
    const [escolaridade, setEscolaridade] = useState<string>("")
    const [nacionalidade, setNacionalide] = useState<string>("")
    const [sequencia, setSequencia] = useState<string>("")

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

    const validarCpfSequenciasNumercas = (value:string):boolean => {
        if (/^(\d)\1+$/.test(value)) {
            console.log("cpf invalidado por numeros sequenciais")
            return false
        } else{
            setSequencia(value)
            console.log("cpf valido os numeros nao sao sequenciais")
            return true
        }
    }

    const ProcessaCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        const cpfValue = event.target.value;
        if (validarCpf(cpfValue)) {
            console.log('CPF válido pela soma');
            if(validarCpfSequenciasNumercas(cpfValue)){
                FormataCpf(event)
            }
        } else {
            console.log('CPF inválido pela soma');
        }
    };
    const FormataRg = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, "");
        if (value.length <= 11) {

            value = value.replace(/(\d{2})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{2})(\d{1,2})$/, "$1-$2");
        }
        setRg(value);
    };

    const EnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendDataToParent({ nome, cpf, rg, genero, data, escolaridade, nacionalidade })
    }

    return (
        <div className="BoxFormDados">
            <form className="DivDadosForm" onSubmit={EnviarFormulario}>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" size="small">Nome Completo</InputLabel>
                    <OutlinedInput value={nome} onChange={(e) => setNome(e.target.value)}
                        type={'text'}
                        size="small"
                        label="Nome Completo" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined" onChange={ProcessaCpf}>
                    <InputLabel htmlFor="outlined-adornment-password" size="small">CPF</InputLabel>
                    <OutlinedInput value={cpf} onChange={(e) => setCpf(e.target.value)}
                        type={'text'}
                        size="small"
                        inputProps={{
                            maxLength: 14,
                        }}
                        label="CPF" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined" onChange={FormataRg}>
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
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                    <FormControl sx={{ m: 1 }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" size="small"></InputLabel>
                        <OutlinedInput value={data} onChange={(e) => setData(e.target.value)}
                            size="small"
                            type={'date'} />
                    </FormControl>
                </div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="escolaridade-label" size="small">Escolaridade</InputLabel>
                    <Select
                        size="small"
                        labelId="escolaridade-label"
                        id="escolaridade-select"
                        value={escolaridade}
                        label="Escolaridade"
                        onChange={(e) => setEscolaridade(e.target.value as string)}
                        sx={{ width: '80vw' }}
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


                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="escolaridade-label" size="small">Nacionalidade</InputLabel>
                    <Select
                        size="small"
                        labelId="escolaridade-label"
                        id="escolaridade-select"
                        value={nacionalidade}
                        label="Escolaridade"
                        onChange={(e) => setNacionalide(e.target.value as string)}
                        sx={{ width: '80vw' }}
                    >
                        <MenuItem value="" disabled>
                            Escolha uma opção
                        </MenuItem>
                        <MenuItem value="Alemao">Alemão</MenuItem>
                        <MenuItem value="Argentino">Argentino</MenuItem>
                        <MenuItem value="Belga">Belga</MenuItem>
                        <MenuItem value="Boliviano">Boliviano</MenuItem>
                        <MenuItem value="Brasileiro">Brasileiro</MenuItem>
                        <MenuItem value="Britanico">Britanico</MenuItem>
                        <MenuItem value="Chines">Chines</MenuItem>
                        <MenuItem value="Colombiano">Colombiano</MenuItem>
                        <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                        <MenuItem value="Equatoriano">Equatoriano</MenuItem>
                        <MenuItem value="Espanhol">Espanhol</MenuItem>
                        <MenuItem value="Frances">Frances</MenuItem>
                        <MenuItem value="Italiano">Italiano</MenuItem>
                        <MenuItem value="Japones">Japones</MenuItem>
                        <MenuItem value="Mexicano">Mexicano</MenuItem>
                        <MenuItem value="Naturalizado Brasileiro">Naturalizado Brasileiro</MenuItem>
                        <MenuItem value="Outros">Outros</MenuItem>
                        <MenuItem value="Peruano">Peruano</MenuItem>
                        <MenuItem value="Portugues">Português</MenuItem>
                        <MenuItem value="Uruquaio">Uruquaio</MenuItem>
                        <MenuItem value="Venezuelano">Venezuelano</MenuItem>
                    </Select>
                </FormControl>

                <input type="submit" value="Continuar" className="InputDados" id="InputDados" />
            </form>
        </div>
    )
}