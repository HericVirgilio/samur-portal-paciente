import Image from "next/image"
import "./style.css"
export default function HeaderTable() {
    return (
        <div className="BoxHeaderTabela">
            <div className="BoxPacienteTabelaPaciente">
                <Image src="/icons/profile-circle.svg" alt="img user" height={20} width={20} />
                <h5>Paciente</h5>
            </div>
            <h5>Data</h5>
        </div>
    )
}