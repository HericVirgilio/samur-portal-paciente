"use client"
import "./style.css"
import HeaderPrincipal from "@/components/header-principal"
import Image from "next/image"
import { ComponentesMinhaConta } from "@/data/componentes-minhaconta"
import Link from "next/link"
export default function MinhaConta (){
    return(
        <div>
            <HeaderPrincipal/>
            <div className="BoxUser">
                <Image src={"/images/eduarda-ferreira.png"} alt="" width={100} height={100} className="ImagemUser"/>
                <h3>Eduarda Ferreira</h3>
            </div>
            <div className="Container">
                {ComponentesMinhaConta.map((objeto) =>
                    <Link href={objeto.url} className="ContainerIcons" key={objeto.id}>
                        <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                            <Image src={objeto.img} alt={objeto.titulo} width={40} height={40}/>
                            <h4>{objeto.titulo}</h4>
                        </div>
                        <Image style={{transform: "rotate(270deg)"}} src={"/icons/flecha-drop-down.svg"} alt="DropDown" width={30} height={30}/>
                    </Link>
                )}
            </div>
        </div>
    )
}