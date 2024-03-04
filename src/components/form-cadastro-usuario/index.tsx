import "./style.css"
import { useState } from "react"

export default function FormCadastroUsuario() {

    const[cpf,setCpf] = useState<string>("")
    const[data,setData] = useState<string>("")
    const[rg,setRg] = useState<string>("")
    const[cep,setCep] = useState<string>("")
    const[telefone,setTelefone] = useState<string>("")
    const[telefone2,setTelefone2] = useState<string>("")


    const FormataCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); 
        if (value.length <= 11) {
           
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        setCpf(value);
    };
    const FormataRg = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); 
        if (value.length <= 11) {
           
            value = value.replace(/(\d{2})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{2})(\d{1,2})$/, "$1-$2");
        }
        setRg(value);
    };
    const FormataCep = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); 
        if (value.length <= 11) {
            value = value.replace(/(\d{5})(\d{1,2})$/, "$1-$2");
        }
        setCep(value);
    };
    const FormataTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); 
        if (value.length <= 11) {
            value = value.replace(/(\d{0})(\d)/, "$1($2");
            value = value.replace(/(\d{2})(\d)/, "$1)$2");
            value = value.replace(/(\d{5})(\d{4,5})$/, "$1-$2");
        }
        setTelefone(value);
    };
    const FormataTelefone2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); 
        if (value.length <= 11) {
            value = value.replace(/(\d{0})(\d)/, "$1($2");
            value = value.replace(/(\d{2})(\d)/, "$1)$2");
            value = value.replace(/(\d{5})(\d{4,5})$/, "$1-$2");
        }
        setTelefone2(value);
    };
    const FormataData = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); 
        if (value.length <= 11) {
            value = value.replace(/(\d{2})(\d)/, "$1/$2");
            value = value.replace(/(\d{2})(\d)/, "$1/$2");
            value = value.replace(/(\d{5})(\d{4,5})$/, "$1-$2");
        }
        setData(value);
    };

   

    return (
        <form className="FormularioUser">

            <input className="InputBox" type="text" name="cpf" id="cpf" maxLength={14} onChange={FormataCpf}
                placeholder="CPF" value={cpf} />

            <input className="InputBox" type="text" name="nomeCompleto" id="nomeCompleto"
                placeholder="Nome Completo" />

            <input className="InputBox" type="email" name="email" id="email"
                placeholder="Email" />

            <input className="InputBox" type="text" name="dataNasc" id="dataNasc" 
            maxLength={10} onChange={FormataData} value={data}
                placeholder="Data de nascimento"/>

            <input className="InputBox" type="text" name="rg" id="rg" maxLength={13} onChange={FormataRg}
                value={rg} placeholder="RG" />

            <input className="InputBox" type="text" name="nacionalidade" id="nacionalidade"
                placeholder="Nacionalidade" />

            <select className='item-select'  name="sexo" id="sexo">
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

            <input style={{ marginTop: "10px" }} className="InputBox" type="text" name="cep" id="cep" placeholder="Cep" maxLength={9} onChange={FormataCep} value={cep} />

            <input className="InputBox" type="text" name="logradouro" id="logradouro" placeholder="Logradouro" />

            <input className="InputBox" type="text" name="complemento" id="complemento"
                placeholder="Complemento" />

            <input className="InputBox" type="text" name="bairro" id="bairro"
                placeholder="Bairro" />

            <input className="InputBox" type="text" name="cidade" id="cidade"
                placeholder="Cidade" />

            <input className="InputBox" type="text" name="uf" id="uf" placeholder="UF" />

            <input className="InputBox" type="text" name="telefone1" id="telefone1"
                placeholder="Telefone 1" maxLength={14} onChange={FormataTelefone} value={telefone} />

            <input className="InputBox" type="text" name="telefone2" id="telefone2"
                placeholder="Telefone 2" maxLength={14} onChange={FormataTelefone2} value={telefone2} />

            <label className='item-inputText'>
                <input type="checkbox" name="politica-privacidade" id="politica-privacidade" />
                <span className='checkBoxText'>Li e aceito a politica de privacidade!</span>
            </label>

            <label className='item-inputText'>
                <input type="checkbox" name="aceito-compartilhar" id="aceito-compartilhar" />
                <span className='checkBoxText'>Aceito compartilhar os meus dados pessoais!</span>
            </label>

            <div className="BoxButtonPai">
                <p className="DivBoxButton">Finalizar cadastro</p>
            </div>
        </form>
    )
}