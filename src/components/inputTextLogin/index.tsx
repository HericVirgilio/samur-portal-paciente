import './style.css'
export default function InputText(){
    return(
        <form className="div-inputText">
            <input className="item-inputText border border-black rounded"
            type="text" name="cpf" id="cpf" placeholder="CPF"/>
            <input className="item-inputText border border-black rounded"
            type="text" name="cpf" id="cpf" placeholder="senha"/>
            <input className='botao-entrar-login' type="button" value="Entrar" />
        </form>
    )
}