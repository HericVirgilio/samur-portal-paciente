import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import "./style.css"
import { FormDataEndereco } from "@/interface/form-data.interface";
import { FormEvent } from "react";
import { useState } from "react";


interface Props {
    sendDataToParent: (data: FormDataEndereco) => void;
}

export default function Endereco({ sendDataToParent }: Props) {

    const [cep, setCep] = useState("")
    const [bairro, setBairro] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")

    const EnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    const FormataCep = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); 
        if (value.length <= 11) {
            value = value.replace(/(\d{5})(\d{1,2})$/, "$1-$2");
        }
        setCep(value);
    };

    return (
        <div className="BoxForm">
            <form className="DivCadastroForm" onSubmit={EnviarFormulario}>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined" onChange={FormataCep} >
                    <InputLabel htmlFor="outlined-adornment-password">CEP</InputLabel>
                    <OutlinedInput value={cep} onChange={(e) => setCep(e.target.value)}
                        type={'text'}
                        label="CEP"
                        inputProps={{
                            maxLength: 9,
                        }}/>
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Bairro</InputLabel>
                    <OutlinedInput value={bairro} onChange={(e) => setBairro(e.target.value)}
                        type={'text'}
                        label="Bairro" />
                </FormControl>
                <div className="agrupamentoInputEndereco">
                    <FormControl sx={{ m: 1, width: '40vw' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Logradouro</InputLabel>
                        <OutlinedInput value={logradouro} onChange={(e) => setLogradouro(e.target.value)}
                            type={'text'}
                            label="Logradouro" />
                    </FormControl>
                    <FormControl sx={{ m: 1 }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Número</InputLabel>
                        <OutlinedInput value={numero} onChange={(e) => setNumero(e.target.value)}
                            type={'text'}
                            label="Número" />
                    </FormControl>
                </div>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Complemento</InputLabel>
                    <OutlinedInput value={complemento} onChange={(e) => setComplemento(e.target.value)}
                        type={'text'}
                        label="Complemento" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Cidade</InputLabel>
                    <OutlinedInput value={cidade} onChange={(e) => setCidade(e.target.value)}
                        type={'text'}
                        label="Cidade" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Estado</InputLabel>
                    <OutlinedInput value={estado} onChange={(e) => setEstado(e.target.value)}
                        type={'text'}
                        label="Estado" />
                </FormControl>

                <input type="submit" value="Continuar" className="InputEndereco" id="InputEndereco"  />

            </form>
        </div>
    )
}