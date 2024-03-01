"use client"
import Header from "@/components/header-login-cadastro"
import InputText from "@/components/input-text-login"
import './style.css'
import Ou from "@/components/ou"
import EntrarGoogle from "@/components/entrar-google"
import Link from "next/link"
export default function Login() {
    return (
        <main>
            <Header />
            <h1 className="titulo-login">Bem-vindo ao <br /> Portal do Paciente</h1>
            <InputText />
            <Ou />
            <EntrarGoogle />
            <div className="optionsLogin">
                <Link className="nao-possui-senha" href={'/cadastro'}>Não possui conta? Cadastre-se!</Link>
                <Link className="esqueceu-senha" href={'/criar-nova-senha'}>Esqueci minha senha</Link>
            </div>
        </main>
    )
} 