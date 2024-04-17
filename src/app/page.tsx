"use client"
import './style.css'
import Image from "next/image"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { FormEvent, useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material'
import BotaoEnviarFormulario from '@/components/botao-login-cadastro'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const Logar = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`email: ${email} senha: ${senha}`)
        router.push('/home');
    }

    return (
        <div className='ContainerLogin' style={{backgroundColor: "var(--branco)"}}>
            <div className="BoxHeaderLogin">
                <Image style={{marginTop: "30px"}} src={"/images/samur-principal.png"} alt="" width={250} height={150} />
                <div>
                    <h2 className="TituloHeader">Bem-vindo ao</h2>
                    <h2 className="TituloHeader">Portal do paciente</h2>
                </div>
            </div>
            <form className="BoxHeaderLogin" onSubmit={Logar}>
                <p className='TextLogin'>Login</p>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"  size="small">Email</InputLabel>
                    <OutlinedInput value={email} onChange={(e) => setEmail(e.target.value)}
                        size="small"
                        type={'email'}
                        label="Email" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"  size="small">Senha</InputLabel>
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
                <p className='textEsqueciSenha'>Esqueci minha senha</p>
                <BotaoEnviarFormulario text="Entrar"/>
            </form>
            <div className='LinhaDivisoria'></div>
            <Link href="/cadastro">
                <p className='TextCadastrar-se'>Não possui conta? Clique aqui para <br /> fazer o cadastro </p>
            </Link>
        </div>
    )
} 