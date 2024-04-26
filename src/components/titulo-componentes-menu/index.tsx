import  "./style.css"
import '@fontsource/ibm-plex-sans';

export default function TituloFormatado(props: { objeto: string }) {
    return (
        <div className="Container" >
            <h3 style={{ fontFamily: 'IBM Plex Sans', fontSize: "50px"}} className="Titulo">{props.objeto}</h3>
        </div >
    )
}