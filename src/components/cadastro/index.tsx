import "./style.css"
import { FormEvent, useEffect, useState } from "react";
import { FormData } from "@/interface/form-data.interface";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BotaoEnviarFormulario from "../botao-login-cadastro";
import Image from "next/image";

interface Props {
    sendDataToParent: (data: FormData) => void;
}

export default function CadastroFormulario({ sendDataToParent }: Props) {

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [senha2, setSenha2] = useState<string>("")
    const [erroSenha, setErroSenha] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false);
    const [regexNumero, setRegexNumero] = useState<boolean | null>(null)
    const [regexCaracterEspecial, setRegesCaracterEspecial] = useState<boolean | null>(null)
    const [regexLetras, setRegexLetras] = useState<boolean | null>(null)

    const EnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (senha === senha2 && validarSenha()) {
            sendDataToParent({ email, senha });
        } else if (senha != senha2) {
            setErroSenha("As senhas são diferentes !")
        } else {
            setErroSenha("Senha informada não atende aos requisitos de segurança !")
        }
    }

    useEffect(() => {
        if (senha !== "") {
            validarSenha()
            verificaNumero()
            verificaCaracteres()
            verificaLetras()
        }
    }, [senha])

    const validarSenha = () => {
        if (senha.length >= 8) {
            verificaNumero()
            verificaCaracteres()
            verificaLetras()
            console.log("numero:", regexNumero, "caracteres: ", regexCaracterEspecial, "letras: ", regexLetras)
            if(regexNumero && regexLetras && regexCaracterEspecial){
                return true
            }
        } else {
            console.log("senha menor que  8 seu tamanho é " + senha.length)
            return false
        }
    }

    const verificaNumero = () => {
        const regexNumero = /\d/
        if (regexNumero.test(senha)) {
            setRegexNumero(true)
        } else {
            setRegexNumero(false)
        }
    }
    const verificaCaracteres = () => {
        const regexCaracteresEspeciais = /[^a-zA-Z 0-9]+/g
        if (regexCaracteresEspeciais.test(senha)) {
            setRegesCaracterEspecial(true)
        } else {
            setRegesCaracterEspecial(false)
        }
    }
    const verificaLetras = () => {
        const regexLetras = /[A-Za-z]/
        if (regexLetras.test(senha)) {
            setRegexLetras(true)
        } else {
            setRegexLetras(false)
        }
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="BoxForm">
            <form className="DivCadastroForm" onSubmit={EnviarFormulario} >
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" size="small">Email</InputLabel>
                    <OutlinedInput value={email} onChange={(e) => setEmail(e.target.value)}
                        type={'email'}
                        label="Email"
                        size="small" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" size="small" >Senha</InputLabel>
                    <OutlinedInput value={senha} onChange={(e) => setSenha(e.target.value)}
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        } label="Senha" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" size="small">Digite a senha novamente</InputLabel>
                    <OutlinedInput value={senha2} onChange={(e) => setSenha2(e.target.value)}
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        } label="Digite a senha novamente" />
                </FormControl>
                {erroSenha && <div className="DivErro" >{erroSenha}</div>}
                <BotaoEnviarFormulario text="Continuar" />
            </form>
            <div className="RequisitosSenha">
                <h5>A senha deve conter:</h5>
                <div className="ContainerVeridicadoresDeSenha">No mínimo 8 caracteres
                    <Image src={"/icons/check.svg"} alt="" width={20} height={20}
                        style={{ display: senha.length >= 8 ? "block" : "none" }} />
                    <p style={{ display: senha.length < 8 && senha !== "" ? "block" : "none" }}>X</p>
                </div>
                <div className="ContainerVeridicadoresDeSenha">Letras
                    <Image src={"/icons/check.svg"} alt="" width={20} height={20}
                        style={{ display: regexLetras ? "block" : "none" }} />
                    <p style={{ display: regexLetras === false ? "block" : "none" }}>X</p>
                </div>
                <div className="ContainerVeridicadoresDeSenha">Números
                    <Image src={"/icons/check.svg"} alt="" width={20} height={20}
                        style={{ display: regexNumero ? "block" : "none" }} />
                    <p style={{ display: regexNumero === false ? "block" : "none" }}>X</p>
                </div>
                <div className="ContainerVeridicadoresDeSenha">Ao menos 1 caractere especial
                    <Image src={"/icons/check.svg"} alt="" width={20} height={20}
                        style={{ display: regexCaracterEspecial ? "block" : "none" }} />
                    <p style={{ display: regexCaracterEspecial === false ? "block" : "none" }}>X</p>
                </div>
            </div>
        </div>
    )
}