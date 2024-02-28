import "./style.css"
import Image from "next/image"

/*Colocar os id iqual pode gerar conflito no futuro lembre-se de verificar caso resulte erro*/
export default function InputTextCadastro() {
    return (
        <form className="FormularioUser">

            <input className="InputBox" type="text" name="cpf" id="cpf"
                placeholder="CPF" />

            <input className="InputBox" type="text" name="nomeCompleto" id="nomeCompleto"
                placeholder="Nome Completo" />

            <input className="InputBox" type="email" name="email" id="email"
                placeholder="Email" />

            <input className="InputBox" type="text" name="dataNasc" id="dataNasc"
                placeholder="Data de nascimento" />

            <input className="InputBox" type="text" name="rg" id="rg"
                placeholder="RG" />

            <input className="InputBox" type="text" name="nacionalidade" id="nacionalidade"
                placeholder="Nacionalidade" />

            <select className='item-select' name="sexo" id="sexo">
                <option value="invalido" disabled={true}>Selecione o sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="indeterminado">Indeterminado</option>
            </select>

            <select className='item-select' name="escolaridade" id="escolaridade">
                <option value="invalido" disabled={true} >Selecione a escolaridade</option>
                <option value="ensino_fundamental">Ensino Fundamental</option>
                <option value="ensino_medio">Ensino Médio</option>
                <option value="ensino_superior">Ensino Superior</option>
                <option value="pos_graduacao">Pós-graduação</option>
                <option value="mestrado">Mestrado</option>
                <option value="doutorado">Doutorado</option>
                <option value="pos_doutorado">Pós-doutorado</option>
            </select>

            <h2 style={{margin: "20px 0 20px 0"}}>Endereço</h2>

            <input style={{ marginTop: "10px" }} className="InputBox" type="text" name="cep" id="cep" placeholder="Cep" />

            <input className="InputBox" type="text" name="logradouro" id="logradouro" placeholder="Logradouro" />

            <input className="InputBox" type="text" name="complemento" id="complemento"
                placeholder="Complemento" />

            <input className="InputBox" type="text" name="bairro" id="bairro"
                placeholder="Bairro" />

            <input className="InputBox" type="text" name="cidade" id="cidade"
                placeholder="Cidade" />

            <input className="InputBox" type="text" name="uf" id="uf" placeholder="UF" />

            <input className="InputBox" type="text" name="telefone1" id="telefone1"
                placeholder="Telefone 1" />

            <input className="InputBox" type="text" name="telefone2" id="telefone2"
                placeholder="Telefone 2" />

            <label className='item-inputText'>
                <input type="checkbox" name="politica-privacidade" id="politica-privacidade" />
                <span className='checkBoxText'>Li e aceito a politica de privacidade!</span>
            </label>

            <label className='item-inputText'>
                <input type="checkbox" name="aceito-compartilhar" id="aceito-compartilhar" />
                <span className='checkBoxText'>Aceito compartilhar os meus dados pessoais!</span>
            </label>

            <div className="DivBoxButton">
                <p>Cadastrar Usuario</p>
            </div>
        </form>
    )
}