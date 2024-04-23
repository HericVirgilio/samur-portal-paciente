"use client"
import "./style.css"
import { useEffect, useState } from "react";
import Image from "next/image";
import CadastroFormulario from "@/components/cadastro"
import Dados from "@/components/cadastro-dados/indes";
import Endereco from "@/components/cadastro-endereco";
import { FormData, FormDataDados, FormDataEndereco } from "@/interface/form-data.interface";

export default function Cadastro() {

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    const [formDataDados, setFormDataDados] = useState({
        nome: "", cpf: "", rg: "", genero: "", data: "",
        escolaridade: "", nacionalidade: ""
    });

    const [formDataEndereco, setFormDataEndereco] = useState({
        cep: "", bairro: "", logradouro: "", numero: "", complemento: "", cidade: "",
        estado: "", telefone1: "", telefone2: ""
    })
    const [controle, setControle] = useState(1)
    const [visibilidadeCadastro, setVisibilidadeCadastro] = useState({ int: 1, visib: "block" })
    const [visibilidadeDados, setVisibilidadeDados] = useState({ int: 2, visib: "block" })
    const [visibilidadeEndereco, setVisibilidadeEndereco] = useState({ int: 3, visib: "block" })
    const [link, setLink] = useState("http://localhost:3000/login")

    const FormularioCadastro = (data: FormData) => {
        console.log(data.email, data.senha)
        try {
            setEmail(data.email)
            setSenha(data.senha)
            setControle(2)
        } catch (error) {
            console.log(`algo deu errado ${error}`)
        }
    }
    const FormularioDados = (data: FormDataDados) => {
        console.log(`nome: ${data.nome}, cpf: ${data.cpf}, rf: ${data.rg}
        , genero: ${data.genero}, data: ${data.data}, escolariada: ${data.escolaridade},
        nacionalidade: ${data.nacionalidade}`);
        try {
            setFormDataDados({
                ...formDataDados,
                nome: data.nome,
                nacionalidade: data.nacionalidade,
                cpf: data.nacionalidade,
                rg: data.rg,
                genero: data.genero,
                data: data.data,
                escolaridade: data.escolaridade
            })
        } catch (error) {
            console.log(`algo deu errado ${error}`)
        }
        setControle(3)
    }
    const FormularioEndereco = (data: FormDataEndereco) => {

        console.log(`cep: ${data.cep}, bairro: ${data.bairro}, logradouro: ${data.logradouro}
        , numero: ${data.numero}, complemento: ${data.complemento}, cidade: ${data.localidade},
        estado: ${data.uf}, telefone1: ${data.telefone1}, telefone2: ${data.telefone2}`);
        setFormDataEndereco({
            ...formDataEndereco,
            cep: data.cep,
            bairro: data.bairro,
            logradouro: data.logradouro,
            numero: data.numero,
            complemento: data.complemento,
            cidade: data.localidade,
            estado: data.uf,
            telefone1: data.telefone1,
            telefone2: data.telefone2
        })

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
            setLink("/");
        }
    }

    return (
        <div className="ContainerCadastro">
            <div className='DivBoxHeaderPrincipal' >
                <div className="BoxVoltar">
                    <Image src={"/icons/voltarHeaderCadastro.svg"} alt='Voltar' width={35} height={35}
                        className='imgVoltar' onClick={Voltar} />
                </div>
                <div className="BoxLogo">
                    <Image src="/images/samur-principal.png" alt="" width={250} height={150} priority />
                </div>
            </div>

            <div className="DivCadastroTitle">
                <h2>Cadastro</h2>
                <p>{controle}/3</p>
            </div>
            {visibilidadeCadastro.int === controle &&
                <span  style={{ display: visibilidadeCadastro.visib }} >
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