import './style.css'
import Header from "@/components/headerLoginCadastro"
import InputTextCadastro from '@/components/inputTextCadastro'
import { Roboto } from 'next/font/google'
export default function Cadastro(){
    return(
        <div>
            <Header/>      
            <InputTextCadastro/>         
        </div>
    )
}