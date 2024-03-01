import './style.css';
import React, { useState } from 'react';

export default function InputText(){

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const Logar = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("cpf", cpf);
        console.log("senha", senha);
    };

    return(
        <form className="div-inputText" onSubmit={Logar}>
            <input className="item-inputText border border-black rounded" type="text" name="cpfLogin" id="cpfLogin" placeholder="CPF" onChange={(e) => setCpf(e.target.value)}/>
            <input className="item-inputText border border-black rounded" type="password" name="senhaLogin" id="senhaLogin" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
            <input className='botao-entrar-login' type="submit" value="Entrar"/>
        </form>
    );
}
