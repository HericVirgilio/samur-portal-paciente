import './style.css';
import React, { useState } from 'react';


export default function InputTextCadastro() {
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [rg, setRg] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [sexo, setSexo] = useState('');
    const [escolaridade, setEscolaridade] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone1, setTelefone1] = useState('');
    const [telefone2, setTelefone2] = useState('');
    const [politicaPrivacidade, setPoliticaPrivacidade] = useState(false);
    const [aceitoCompartilhar, setAceitoCompartilhar] = useState(false);

    const Logar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usuario = {
            cpf: cpf,
            email: email,
            senha: senha,
            confirmaSenha: confirmaSenha,
            nome: nome,
            data: data,
            rg: rg,
            nacionalidade: nacionalidade,
            sexo: sexo,
            escolaridade: escolaridade,
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            complemento: complemento,
            cidade: cidade,
            estado: estado,
            telefone1: telefone1,
            telefone2: telefone2
        };

        const usuarios = [usuario];

        console.log(usuarios);
  
        
    };

    return (
        <form className="box-inputText" onSubmit={Logar}>
            <h2 className='titulo-cadastro-endereco'>Cadastro do usuário</h2>

            <input className="item-inputText border border-black rounded" 
            required 
                type="text" name="cpf" id="cpf" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="password" name="senha" id="senha" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="password" name="confimacao-senha" id="confirmacao-senha" placeholder="Digite a senha novamente" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="nome" id="nome" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="date" name="dataNascimento" id="dataNascimento" onChange={(e) => setData(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="rg" id="rg" placeholder="RG" value={rg} onChange={(e) => setRg(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="nacionalidade" id="nacionalidade" placeholder="Nacionalidade" value={nacionalidade} onChange={(e) => setNacionalidade(e.target.value)} />

            <select className='item-select' name="sexo" id="sexo" onChange={(e) => setSexo(e.target.value)}>
                <option value="invalido">Selecione o sexo</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="indeterminado">Indeterminado</option>
            </select>

            <select className='item-select' name="escolaridade" id="escolaridade" onChange={(e) => setEscolaridade(e.target.value)}>
                <option value="invalido">Selecione a escolaridade</option>
                <option value="ensino_fundamental">Ensino Fundamental</option>
                <option value="ensino_medio">Ensino Médio</option>
                <option value="ensino_superior">Ensino Superior</option>
                <option value="pos_graduacao">Pós-graduação</option>
                <option value="mestrado">Mestrado</option>
                <option value="doutorado">Doutorado</option>
                <option value="pos_doutorado">Pós-doutorado</option>
            </select>


            <h2 className='titulo-cadastro-endereco'>Endereço</h2>

            <input className="item-inputText border border-black rounded" required
                type="text" name="cep" id="cep" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="logradouro" id="logradouro" placeholder="Logradouro" value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="bairro" id="bairro" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="complemento" id="complemento" placeholder="Complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="cidade" id="cidade" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="estado" id="estado" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="telefone-1" id="telefone-1" placeholder="Telefone 1" value={telefone1} onChange={(e) => setTelefone1(e.target.value)} />

            <input className="item-inputText border border-black rounded" required
                type="text" name="telefone-2" id="telefone-2" placeholder="Telefone 2" value={telefone2} onChange={(e) => setTelefone2(e.target.value)} />

            <label className='item-inputText'>
                <input type="checkbox" name="politica-privacidade" id="politica-privacidade" checked={politicaPrivacidade} onChange={(e) => setPoliticaPrivacidade(e.target.checked)} />
                <span className='checkBoxText'>Li e aceito a politica de privacidade!</span>
            </label>

            <label className='item-inputText'>
                <input type="checkbox" name="aceito-compartilhar" id="aceito-compartilhar" checked={aceitoCompartilhar} onChange={(e) => setAceitoCompartilhar(e.target.checked)} />
                <span className='checkBoxText'>Aceito compartilhar os meus dados pessoais!</span>
            </label>

            <button className='botao-entrar-login' type="submit">Entrar</button>
        </form>
    );
}
