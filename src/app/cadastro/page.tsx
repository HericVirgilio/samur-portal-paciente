"use client"
import { useState } from "react";
import Header from "@/components/header-login-cadastro"
import CadastroFormulario from "@/components/cadastro"
import Dados from "@/components/cadastro-dados/indes";

export default function Cadastro() {

    const [formDataCadastro, setFormDataCadastro] = useState({ email: "", senha: "" });
    const [formDataDados, setFormDataDados] = useState({
        nome: "", cpf: "", rg: "", genero: "", data: "",
        escolaridade: "", nacionalidade: ""
    });
    const [controle, setControle] = useState(0)
    const [visibilidadeCadastro, setVisibilidadeCadastro] = useState({ int: 0, visib: "block" })
    const [visibilidadeDados, setVisibilidadeDados] = useState({ int: 1, visib: "block" })
    const [visibilidadeEndereco, setVisibilidadeEndereco] = useState({ int: 2, visib: "block" })

    const FormularioCadastro = (data: any) => {
        try{
        setFormDataCadastro(data);
        console.log(formDataCadastro.email, formDataCadastro.senha)
        setControle(1)
        } catch(error){
            console.log(`algo deu errado ${error}`)
        }
    }
    const FormularioDados = (data: any) => {
        setFormDataDados(data);
        console.log(`nome: ${formDataDados.nome}, cpf: ${formDataDados.cpf}, rf: ${formDataDados.rg}
        , genero: ${formDataDados.genero}, data: ${formDataDados.data}, escolariada: ${formDataDados.escolaridade},
        nacionalidade: ${formDataDados.nacionalidade}`);
    }

    return (
        <div>
            <Header />
            {visibilidadeCadastro.int === controle &&
                <span style={{ display: visibilidadeCadastro.visib }} >
                    <CadastroFormulario sendDataToParent={FormularioCadastro} />
                </span>
            }
            {visibilidadeDados.int === controle &&
                <span style={{ display: visibilidadeDados.visib }} >
                    <Dados sendDataToParent={FormularioDados} />
                </span>
            }
        </div>
    )
}