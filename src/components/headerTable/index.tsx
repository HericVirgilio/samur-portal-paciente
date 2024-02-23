import Image from "next/image"
import "./style.css"
export default function HeaderTable(props: { texto1: string, texto2: string}) {
    return (
        <div className="BoxHeaderTabela">
            <div className="BoxPacienteTabelaPaciente">
                <Image src="/icons/profile-circle.svg" alt="img user" height={20} width={20} />
                <h5>{props.texto1}</h5>
            </div>
            <h5>{props.texto2}</h5>
        </div>
    )
}