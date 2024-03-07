"use client"
import "./style.css"
import { useEffect, useState } from "react";
import Image from "next/image";
import CadastroFormulario from "@/components/cadastro"
import Dados from "@/components/cadastro-dados/indes";
import Endereco from "@/components/endereco";

export default function Cadastro() {

    const [formDataCadastro, setFormDataCadastro] = useState({ email: "", senha: "" });
    const [formDataDados, setFormDataDados] = useState({
        nome: "", cpf: "", rg: "", genero: "", data: "",
        escolaridade: "", nacionalidade: ""
    });
    const [controle, setControle] = useState(1)
    const [visibilidadeCadastro, setVisibilidadeCadastro] = useState({ int: 1, visib: "block" })
    const [visibilidadeDados, setVisibilidadeDados] = useState({ int: 2, visib: "block" })
    const [visibilidadeEndereco, setVisibilidadeEndereco] = useState({ int: 3, visib: "block" })
    const [link, setLink] = useState("http://localhost:3000/login")

    const FormularioCadastro = (data: any) => {
        try {
            setFormDataCadastro(data);
            console.log(formDataCadastro.email, formDataCadastro.senha)
            setControle(2)
        } catch (error) {
            console.log(`algo deu errado ${error}`)
        }
    }
    const FormularioDados = (data: any) => {
        setFormDataDados(data);
        console.log(`nome: ${formDataDados.nome}, cpf: ${formDataDados.cpf}, rf: ${formDataDados.rg}
        , genero: ${formDataDados.genero}, data: ${formDataDados.data}, escolariada: ${formDataDados.escolaridade},
        nacionalidade: ${formDataDados.nacionalidade}`);
        setControle(3)
    }
    const FormularioEndereco = (data: any) => {
        setFormDataDados(data);
        console.log(`nome: ${formDataDados.nome}, cpf: ${formDataDados.cpf}, rf: ${formDataDados.rg}
        , genero: ${formDataDados.genero}, data: ${formDataDados.data}, escolariada: ${formDataDados.escolaridade},
        nacionalidade: ${formDataDados.nacionalidade}`);
        setControle(3)
    }

    useEffect(() => {
        if (controle === 0) {
            window.location.href = "/login";
        }
    }, [controle]);

    const Voltar = () => {
        if (controle != 0) {
            setControle(controle - 1)
        } else {
            setLink("/login");
        }
    }

    return (
        <div>
            <div className='DivBoxHeaderPrincipal' >
            <Image src={"/icons/voltarHeaderCadastro.svg"} alt='Voltar' width={35} height={35}
                className='imgVoltar' onClick={Voltar} />
            <Image src="/images/samur-principal.png" alt="" width={250} height={150} priority />
            </div>

            <div className="DivCadastroTitle">
                <h2>Cadastro</h2>
                <p>{controle}/3</p>
            </div>
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
            {visibilidadeEndereco.int === controle &&
                <span style={{ display: visibilidadeDados.visib }} >
                    <Endereco sendDataToParent={FormularioEndereco} />
                </span>
            }
        </div>
    )
}