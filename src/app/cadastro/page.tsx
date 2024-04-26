"use client"
import "./style.css"
import { useEffect, useState } from "react";
import Image from "next/image";
import CadastroFormulario from "@/components/cadastro"
import Dados from "@/components/cadastro-dados/indes";
import Endereco from "@/components/cadastro-endereco";
import { FormData, FormDataDados, FormDataEndereco } from "@/interface/form-data.interface";

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

export default function Cadastro() {

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    const [formDataDados, setFormDataDados] = useState({
        nome: "", cpf: "", rg: "", genero: "", data: "",
        escolaridade: "", nacionalidade: 0
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
    const [contador, setContador] = useState(0);
    const [marginLeft, setMarginLeft] = useState("-0%")

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
        nacionalidade: ${data.nacionalidadeId}`);
        try {
            setFormDataDados({
                ...formDataDados,
                nome: data.nome,
                nacionalidade: data.nacionalidadeId,
                cpf: data.cpf,
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
            window.location.href = "/";
        }
    }, [controle]);
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

    const Voltar = () => {
        if (controle != 0) {
            setControle(controle - 1)
        } else {
            setLink("/");
        }
    }

    return (
        <div className="ContainerCadastro">
            <div className="CadastroLeft" >
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
            <div className="CadastroRight">
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