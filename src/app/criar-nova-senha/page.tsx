
"use client"
import './style.css'
import Image from "next/image"
import { FormControl, InputLabel, OutlinedInput } from "@mui/material"
import { FormEvent, useState } from "react";
import BotaoEnviarFormulario from '@/components/botao-login-cadastro'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CriarNovaSenha() {

    const [email, setEmail] = useState("")
    const router = useRouter();

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const Logar = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`email: ${email}`)
        router.push('/');
    }

    return (
        <div className='ContainerLogin' style={{ backgroundColor: "var(--branco)" }}>
            <div className="BoxHeaderLogin">
                <Image style={{ marginTop: "30px" }} src={"/images/samur-principal.png"} alt="" width={250} height={150} />
                <div>
                    <h2 className="TituloHeader">Bem-vindo ao</h2>
                    <h2 className="TituloHeader">Portal do paciente</h2>
                </div>
            </div>
            <form className="BoxHeaderLogin" onSubmit={Logar}>
                <p className='TextLogin'>Criar nova senha</p>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" size="small">Email</InputLabel>
                    <OutlinedInput value={email} onChange={(e) => setEmail(e.target.value)}
                        size="small"
                        type={'email'}
                        label="Email" />
                </FormControl>
                <BotaoEnviarFormulario text="Entrar" />
            </form>
            <div className='LinhaDivisoria'></div>
            <Link href="/cadastro">
                <p className='TextCadastrar-se'>Não possui conta? Clique aqui para <br /> fazer o cadastro </p>
            </Link>
        </div>
    )
}