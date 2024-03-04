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
    const FormataCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value.replace(/\D/g, ""); 
        if (value.length <= 11) {
           
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d)/, "$1.$2");
            value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        }
        setCpf(value);
    };

    return(
        <form className="div-inputText" onSubmit={Logar}>
            <input className="item-inputText border border-black rounded" type="text" name="cpfLogin"
            maxLength={14} onChange={FormataCpf} placeholder="CPF" value={cpf} 
            id="cpfLogin"/>
            <input className="item-inputText border border-black rounded" type="password" name="senhaLogin" id="senhaLogin" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>
            <input className='botao-entrar-login' type="submit" value="Entrar"/>
        </form>
    );
}
