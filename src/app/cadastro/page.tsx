"use client"
import { FormEvent, useState } from "react";

import Header from "@/components/header-login-cadastro"
import CadastroFormulario from "@/components/cadastro"
export default function Cadastro() {

    const [formData, setFormData] = useState({ email: "", senha: "" });

    const receiveFromChild = (data:any) => {
        setFormData(data);
        console.log("dados: " , data.email, "senha:" , data.senha)
    }

    return (
        <div>
            <Header/> 
            <CadastroFormulario sendDataToParent={receiveFromChild}/>
        </div>
    )
}