"use client"
import './style.css'
import Image from "next/image"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { FormEvent, useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material'
import BotaoEnviarFormulario from '@/components/botao-login-cadastro'
import Link from 'next/link';

export default function Login() {

    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const Logar = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`cpf: ${cpf} senha: ${senha}`)
    }

    const FormataCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, "");
        if (value.length <= 11) {

            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        setCpf(value);
    };

    return (
        <div>
            <div className="BoxHeaderLogin">
                <Image src={"/images/samur-principal.png"} alt="" width={250} height={150} />
                <div>
                    <h2 className="TituloHeader">Bem-vindo ao</h2>
                    <h2 className="TituloHeader">Portal do paciente</h2>
                </div>
            </div>
            <form className="BoxHeaderLogin" onSubmit={Logar}>
                <p className='TextLogin'>Login</p>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined" onChange={FormataCpf}>
                    <InputLabel htmlFor="outlined-adornment-password">CPF</InputLabel>
                    <OutlinedInput value={cpf} onChange={(e) => setCpf(e.target.value)}
                        type={'text'}
                        inputProps={{
                            maxLength: 14,
                        }}
                        label="CPF" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput value={senha} onChange={(e) => setSenha(e.target.value)}

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
                <p className='textEsqueciSenha'>Esqueci minha senha</p>
                <BotaoEnviarFormulario text="Entrar"/>
            </form>
            <div className='LinhaDivisoria'></div>
            <Link href="http://localhost:3000/cadastro">
                <p className='TextCadastrar-se'>Não possui conta? Clique aqui para <br /> fazer o cadastro </p>
            </Link>
        </div>
    )
} 