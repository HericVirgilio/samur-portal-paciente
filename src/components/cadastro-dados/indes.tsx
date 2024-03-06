import "./style.css"
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { FormEvent, useState } from "react";
import { FormDataDados } from "@/interface/form-data.interface";
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    sendDataToParent: (data: FormDataDados) => void;
}

export default function Dados({ sendDataToParent }: Props) {

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const [nome, setNome] = useState<string>("")
    const [cpf, setCpf] = useState<string>("")
    const [rg, setRg] = useState<string>("")
    const [genero, setGenero] = useState<string>("")
    const [data, setData] = useState<string>("")
    const [escolaridade, setEscolaridade] = useState<string>("")
    const [nacionalidade, setNacionalide] = useState<string>("")

    const FormataCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, "");
        if (value.length <= 11) {

            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        setCpf(value);
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
                    <InputLabel htmlFor="outlined-adornment-password">Nome Completo</InputLabel>
                    <OutlinedInput value={nome} onChange={(e) => setNome(e.target.value)}
                        type={'text'}
                        label="Nome Completo" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined" onChange={FormataCpf}>
                    <InputLabel htmlFor="outlined-adornment-password">CPF</InputLabel>
                    <OutlinedInput value={cpf} onChange={(e) => setCpf(e.target.value)}
                        type={'text'}
                        inputProps={{
                            maxLength: 14,
                        }}
                        label="CPF" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined" onChange={FormataRg}>
                    <InputLabel htmlFor="outlined-adornment-password">RG</InputLabel>
                    <OutlinedInput value={rg} onChange={(e) => setRg(e.target.value)}
                        type={'text'}
                        inputProps={{
                            maxLength: 13,
                        }}
                        label="RG" />
                </FormControl>
                <div className="agrupamentoInput">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="escolaridade-label">Genero</InputLabel>
                    <Select
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
                        <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
                        <OutlinedInput value={data} onChange={(e) => setData(e.target.value)}
                            type={'date'} />
                    </FormControl>
                </div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="escolaridade-label">Escolaridade</InputLabel>
                    <Select
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
                    <InputLabel id="escolaridade-label">Nacionalidade</InputLabel>
                    <Select
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