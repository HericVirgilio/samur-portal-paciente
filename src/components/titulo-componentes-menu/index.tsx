export default function TituloFormatado(props: { objeto: string }) {
    return (
        <div style={{margin: "15px"}}>
            <h3 style={{fontSize:"22px", fontWeight:"700",color:"var(--verde-escuro)"}}>{props.objeto}</h3>
        </div >
    )
}