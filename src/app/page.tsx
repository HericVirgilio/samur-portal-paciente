"use client"
import './style.css'
import Image from "next/image"
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import { FormEvent, useState } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material'
import BotaoEnviarFormulario from '@/components/botao-login-cadastro'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Imagens = [
    {
        class: "slide0 s0",
        id: "test",
        img: "/images/samur-secundaria.png",
        alt: "banner"
    },
    {
        class: "slide1",
        id: "slide1",
        img: "/slider/1.jpg",
        alt: "banner"
    },
    {
        class: "slide2",
        id: "slide2",
        img: "/slider/2.png",
        alt: "banner"
    },
    {
        class: "slide3",
        id: "slide3",
        img: "/slider/3.png",
        alt: "banner"
    },
    {
        class: "slide4",
        id: "slide4",
        img: "/slider/4.png",
        alt: "banner"
    }
]

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [contador, setContador] = useState(0);
    const [marginLeft, setMarginLeft] = useState("-0%")

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const Logar = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`email: ${email} senha: ${senha}`)
        router.push('/home');
    }

    useEffect(() => {
        switch (contador) {
            case 0: {
                setMarginLeft("-0%")
                break;
            }
            case 1: {
                setMarginLeft("-40%")
                break;
            }
            case 2: {
                setMarginLeft("-80%")
                break;
            }
            case 3: {
                setMarginLeft("-120%")
                break;
            }
            case 4: {
                setMarginLeft("-160%")
                break;
            }
        }
        const timer = setInterval(() => {
            setContador((contador) => (contador + 1) % Imagens.length);
        }, 5000);
    
        return () => clearInterval(timer);
    }, [contador, Imagens.length]) 

    return (
        <div className='ContainerLogin' style={{ backgroundColor: "var(--branco)" }}>
            <div className='InputsAndLogo'>
                <div className="BoxHeaderLogin" id='BoxHeaderLogin'>
                    <Image style={{ marginTop: "30px" }} src={"/images/samur-principal.png"} alt="" width={250} height={150} />
                    <div>
                        <h2 className="TituloHeader">Bem-vindo ao</h2>
                        <h2 className="TituloHeader">Portal do paciente</h2>
                    </div>
                </div>
                <form className="BoxHeaderLogin" onSubmit={Logar}>
                    <p className='TextLogin'>Login</p>
                    <FormControl className='FormControl' variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" size="small">Email</InputLabel>
                        <OutlinedInput value={email} onChange={(e) => setEmail(e.target.value)}
                            size="small"
                            type={'email'}
                            label="Email" />
                    </FormControl>
                    <FormControl className='FormControl' variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password" size="small">Senha</InputLabel>
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
                    <Link href={"/criar-nova-senha"}>
                        <p className='textEsqueciSenha'>Esqueci minha senha</p>
                    </Link>
                    <BotaoEnviarFormulario text="Entrar" />
                </form>
                <div className='LinhaDivisoria'></div>
                <Link href="/cadastro">
                    <p className='TextCadastrar-se'>Não possui conta? Clique aqui para <br /> fazer o cadastro </p>
                </Link>
            </div>
            <div className='ContainerSlider'>
                <div className='Caixa'>
                    <div className='slides'>
                        {Imagens.map((img, index) => (
                            <div key={img.class} className='slide' id={img.id} style={index === 0 ? {marginLeft: marginLeft} : {}} >
                                <Image src={img.img} alt={img.alt} width={400} height={400} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="navigation">
                    <label className="bar" id="slide0" htmlFor='slide0' onClick={(e) => { setContador(0); }}></label>
                    <label className="bar" id="slide1" htmlFor='slide1' onClick={(e) => { setContador(1); }}></label>
                    <label className="bar" id="slide2" htmlFor='slide2' onClick={(e) => { setContador(2); }}></label>
                    <label className="bar" id="slide3" htmlFor='slide3' onClick={(e) => { setContador(3); }}></label>
                    <label className="bar" id="slide4" htmlFor='slide4' onClick={(e) => { setContador(4); }}></label>
                </div>
            </div>
        </div>
    )
} 