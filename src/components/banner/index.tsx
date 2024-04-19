import Image from "next/image"
import "./style.css"
import { AtalhosPrincipal } from "@/data/atalhos-principal.data"
import Atalhos from "../atalhos"
export default function Banner () {
    return(
        <div className="BoxBanner">
            <div className="AtalhoPrinciapl">
                <Atalhos  atalhos={AtalhosPrincipal}/>
            </div>
        </div>
    )
}