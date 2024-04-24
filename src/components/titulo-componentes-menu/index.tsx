import  "./style.css"
export default function TituloFormatado(props: { objeto: string }) {
    return (
        <div className="Container" >
            <h3 className="Titulo">{props.objeto}</h3>
        </div >
    )
}