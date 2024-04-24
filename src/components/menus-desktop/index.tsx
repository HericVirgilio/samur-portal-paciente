import "./style.css"
import { menuHamburguerData } from "@/data/menu-hamburguer.data"
import { useRouter } from "next/navigation"
import Image from "next/image";
import '@fontsource/yantramanav';

export default function MenuDesktop() {

    

    const router = useRouter();

    const IrPara = (url: string) => {
        router.push(url)
    }
    return (
        <div className="ContainerMenuDesktop">
            <div className="ContainerIcones">
                <div className="ContainerAtalhosMenuHamburguer">
                    <ul className="AtalhosMenuHamburguer">
                        {menuHamburguerData.map((objeto, index) =>
                            index !== menuHamburguerData.length - 1 && (
                                <li style={{fontFamily: 'Yantramanav, sans-serif', fontWeight: "700", fontSize: "19px",letterSpacing: "2px" }} key={objeto.key} onClick={() => IrPara(objeto.nomeUrl)}>{objeto.nome}</li>
                            )
                        )}
                    </ul>
                </div>
                <div className="ImageMascote">
                    
                </div>
            </div>
        </div>
    )
}