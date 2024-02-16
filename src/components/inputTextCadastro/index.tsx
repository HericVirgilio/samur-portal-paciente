import './style.css'
import Link from 'next/link'
export default function InputTextCadastro(){
    return(
        <form className="box-inputText">

    <h2 className='titulo-cadastro-endereco'>Cadastro do usuário</h2>

            <input className="item-inputText border border-black rounded"
            type="text" name="cpf" id="cpf" placeholder="CPF"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="email" id="email" placeholder="Email"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="senha" id="senha" placeholder="Senha"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="confimacao-senha" id="confirmacao-senha" placeholder="Digite a senha novamente"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="nome" id="nome" placeholder="Nome Completo"/>

            <input className="item-inputText border border-black rounded"
            type="date" name="dataNascimento" id="dataNascimento"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="rg" id="tg" placeholder="RG"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="nacionalidade" id="nacionalidade" placeholder="Nacionalidade"/>

            <select className='item-select' name="sexo" id="sexo">
                <option value="invalido">Selecione o sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="indeterminado">Indeterminado</option>
            </select>

            <select className='item-select' name="escolaridade" id="escolaridade">
                <option value="invalido" className='optioText'>Selecione a escolariade</option>
                <option value="masculino" className='optioText'>Masculino</option>
                <option value="feminino" className='optioText'>Feminino</option>
                <option value="indeterminado" className='optioText'>Indeterminado</option>
            </select>

            <h2 className='titulo-cadastro-endereco'>Endereço</h2>

            <input className="item-inputText border border-black rounded"
            type="text" name="cep" id="cep" placeholder="CEP"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="logradouro" id="logradouro" placeholder="Logradouro"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="bairro" id="bairro" placeholder="Bairro"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="complemento" id="complemento" placeholder="Complemento"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="cidade" id="cidade" placeholder="Cidade"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="estado" id="estado" placeholder="Estado"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="telefone-1" id="telefone-1" placeholder="Telefone 1"/>

            <input className="item-inputText border border-black rounded"
            type="text" name="telefone-2" id="telefone-2" placeholder="Telefone 2"/>

            <label className='item-inputText'>
                <input type="checkbox" name="politica-privacidade" id="politica-privacidade" />
                <span className='checkBoxText'>Li e aceito a politica de privacidade!</span>
            </label>
            <label className='item-inputText'>
                <input type="checkbox" name="aceito-compartilhar" id="aceito-compartilhar"/>
                <span className='checkBoxText'>Aceito compartilhar os meus dados pessoais!</span>
            </label>
            <Link href={'/'}>
            <input className='botao-entrar-login' type="button" value="Entrar" />
            </Link>
        </form>
    )
}
/*input nacionalidade*/