import "./style.css"
import Image from "next/image"
export default function BotaoGoogleAgenda(){
    return(
        <div className="BoxGoogleAgenda">
            <div className="BoxLogoGoogleAgenda">
                <Image src="/images/google-agenda.png" alt="google agenda" width={33} height={33}/>
            </div>
            <p className="TextoGoogleAgenda">Importar para o google agenda</p>
        </div>
    )
}