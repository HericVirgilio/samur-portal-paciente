import './style.css'
import Link from 'next/link'
import React,{ useState } from 'react'
export default function InputTextCadastro() {

    const[cpf, setCpf] = useState('')
    const[email,setEmail] = useState('')
    const[senha,setSenha] = useState('')
    const[confirmaSenha,setConfirmaSenha] = useState('')
    const[nome,setNome] = useState('')
    const[data,setData] = useState('')
    const[rg,setRg] = useState('')
    const[nacionalidade,setNacionalidade] = useState('')
    const[cep,setCep] = useState('')
    const[logradouro, setLogradouro] = useState('')
    const[bairro, setBairro] = useState('')
    const[complemento,setComplemento] = useState('')
    const[cidade,setCidade] = useState('')
    const[estado,setEstado] = useState('')
    const[telefone1,setTelefone1] = useState('')
    const[telefone2,setTelefone2] = useState('')

    const Logar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const usuario = {
            cpf: cpf,
            email:email,
            senha:senha,
            confirmaSenha: confirmaSenha,
            nome:nome,
            rg: rg,
            nacionalidade: nacionalidade,
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            complemento: complemento,
            cidade: cidade,
            estado:estado,
            telefone1: telefone1,
            telefone2: telefone2
        }

        const usuarios = [usuario]
        console.log(usuarios)
    }
    return (
        <form className="box-inputText" onSubmit={Logar}>

            <h2 className='titulo-cadastro-endereco'>Cadastro do usuário</h2>

            <input className="item-inputText border border-black rounded"
                type="text" name="cpf" id="cpf" placeholder="CPF" onChange={((e) => setCpf(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="email" name="email" id="email" placeholder="Email" onChange={((e) => setEmail(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="password" name="senha" id="senha" placeholder="Senha" onChange={((e) => setSenha(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="password" name="confimacao-senha" id="confirmacao-senha" placeholder="Digite a senha novamente" onChange={((e) => setConfirmaSenha(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="text" name="nome" id="nome" placeholder="Nome Completo" 
                onChange={((e) => setNome(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="date" name="dataNascimento" id="dataNascimento" />

            <input className="item-inputText border border-black rounded"
                type="text" name="rg" id="tg" placeholder="RG" onChange={((e) => setRg(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="text" name="nacionalidade" id="nacionalidade" placeholder="Nacionalidade" 
                onChange={((e) => setNacionalidade(e.target.value))}/>

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
                type="text" name="cep" id="cep" placeholder="CEP" 
                onChange={((e) => setCep(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="text" name="logradouro" id="logradouro" placeholder="Logradouro" 
                onChange={((e) => setLogradouro(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="text" name="bairro" id="bairro" placeholder="Bairro" 
                onChange={((e) => setBairro(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="text" name="complemento" id="complemento" placeholder="Complemento" 
                onChange={((e) => setComplemento(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="text" name="cidade" id="cidade" placeholder="Cidade" 
                onChange={((e) => setCidade(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="text" name="estado" id="estado" placeholder="Estado"
                onChange={((e) => setEstado(e.target.value))} />

            <input className="item-inputText border border-black rounded"
                type="text" name="telefone-1" id="telefone-1" placeholder="Telefone 1" 
                onChange={((e) => setTelefone1(e.target.value))}/>

            <input className="item-inputText border border-black rounded"
                type="text" name="telefone-2" id="telefone-2" placeholder="Telefone 2" 
                onChange={((e) => setTelefone2(e.target.value))}/>

            <label className='item-inputText'>
                <input type="checkbox" name="politica-privacidade" id="politica-privacidade" />
                <span className='checkBoxText'>Li e aceito a politica de privacidade!</span>
            </label>
            <label className='item-inputText'>
                <input type="checkbox" name="aceito-compartilhar" id="aceito-compartilhar" />
                <span className='checkBoxText'>Aceito compartilhar os meus dados pessoais!</span>
            </label>
            <Link href={'/'}>
                <input className='botao-entrar-login' type="button" value="Entrar" />
            </Link>
        </form>
    )
}
/*input nacionalidade*/