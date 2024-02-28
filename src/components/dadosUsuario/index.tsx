import Image from "next/image"
import "./style.css"
import FormularioDadosUsuario from "../formularioDadosUsuario"
import BoxUserPrincipal from "../box-user-principal"
import { UsuarioData } from "@/data/UsuarioData"

export default function DadosUsuario(){
    return(
        <div className="BoxDadosUsuario">
            <h1>Minha conta</h1>
            <Image className="ImgUser" src="/images/perfil-icon.png" alt="foto usuario" width={100} height={100}/>
            <FormularioDadosUsuario/>

            {UsuarioData.map((objeto) => (
                <BoxUserPrincipal style="#F5F2F2" objeto={objeto}/>
            ))}
            
            
            <div className="buttonCadastrarMais">
                <p>Cadastrar mais</p>
            </div>
        </div>
    )
}