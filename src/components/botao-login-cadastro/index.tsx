import "./style.css"

export default function BotaoEnviarFormulario(props: {text: string}){
    return(
        <input type="submit" value={props.text} className="InputDados" id="InputDados" />      
    )
}