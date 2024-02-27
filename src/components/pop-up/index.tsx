import "./style.css"
import Image from "next/image"
import { useState } from "react"

export default function PopUp(){

    const [popUp, setPopU] = useState({})

    const FecharPopUp = () => {
        setPopU({
            display: "none"
        })
    }

    return(
        <div className="BoxPopUp" style={popUp}>
            <div className="BoxFecharPopUp" onClick={FecharPopUp}>
                <Image  className="FecharPopUp" src={"/icons/close-circulo.svg"} alt="fechar" height={30} width={30} />
            </div>
        </div>
    )
}
