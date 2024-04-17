import Image from "next/image"
import "./style.css"
import FormularioDadosUsuario from "../form-dados-usuario"
import BoxUserPrincipal from "../box-user-principal"
import { UsuarioData } from "@/data/UsuarioData"

export default function DadosUsuario() {
    return (
        <div className="BoxDadosUsuario">
            <h1>Minha conta</h1>
            <Image className="ImgUser" src="/images/eduarda-ferreira.png" alt="foto usuario" width={100} height={100} />
            
            <FormularioDadosUsuario />

            {UsuarioData.map((objeto) => (
                <BoxUserPrincipal key={objeto.key}  objeto={objeto} />
            ))}


            <div className="buttonCadastrarMais">
                <p>Cadastrar mais</p>
            </div>
        </div>
    )
}