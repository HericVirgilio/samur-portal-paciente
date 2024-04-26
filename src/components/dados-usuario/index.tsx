import Image from "next/image";
import "./style.css";
import FormularioDadosUsuario from "../form-dados-usuario";
import BoxUserPrincipal from "../box-user-principal";
import { UsuarioData } from "@/data/UsuarioData";

export default function DadosUsuario() {
  return (
    <div className="BoxDadosUsuario">
      <h1 className="TituloMinhaConta">Minha conta</h1>
      <Image
        className="ImgUser"
        src="/icons/generico-avatar.svg"
        alt="foto usuario"
        width={100}
        height={100}
      />

      <FormularioDadosUsuario />
    </div>
  );
}
