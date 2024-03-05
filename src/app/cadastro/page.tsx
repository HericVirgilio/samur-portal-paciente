"use client"
import { FormEvent, useState } from "react";

import Header from "@/components/header-login-cadastro"
import CadastroFormulario from "@/components/cadastro"
export default function Cadastro() {

    const [formData, setFormData] = useState({ email: "", senha: "" });
    const [display1, setDisplay1] = useState("block")

    const receiveFromChild = (data: any) => {
        setFormData(data);
        setDisplay1("none")
        console.log(formData.email, formData.senha)
    }
    return (
        <div>
            <Header />

                <span style={{ display: display1 }} >
                    <CadastroFormulario sendDataToParent={receiveFromChild} />
                </span>
        
        </div>
    )
}