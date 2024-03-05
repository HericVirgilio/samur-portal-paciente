import "./style.css"
import { FormEvent, useState } from "react";
import { FormData } from "@/interface/form-data.interface";

interface Props {
    sendDataToParent: (data: FormData) => void;
}

export default function CadastroFormulario({ sendDataToParent }: Props) {

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [senha2, setSenha2] = useState<string>("")
    const [erroSenha, setErroSenha] = useState<string>("")

    const EnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const DivErro = document.querySelector(".DivErro");
        if (senha === senha2 && validarSenha(senha)) {
            sendDataToParent({ email, senha });
        } else if (senha != senha2) {
            setErroSenha("As senhas são diferentes")
        } else {
            setErroSenha("A senha deve conter letra e numero")
        }
    }

    const validarSenha = (senha: string) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&_-]{5,}$/;
        return regex.test(senha);
    }

    return (
        <div className="BoxForm">
            <div className="DivCadastroTitle">
                <h2>Cadastro</h2>
                <p>1/3</p>
            </div>
            <form className="DivCadastroForm" onSubmit={EnviarFormulario}>
                <input type="email" placeholder="Email" className="InputCadastro" id="InputPlaceholders"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" className="InputCadastro" id="InputPlaceholders"
                    value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input type="password" placeholder="Digite a senha novamente" className="InputCadastro" id="InputPlaceholders"
                    value={senha2} onChange={(e) => setSenha2(e.target.value)} />
                    
                <div>
                    {erroSenha && <div className="DivErro">{erroSenha}</div>}
                </div>

                <input type="submit" id="InputSenha" value="Continuar" className="InputCadastro" />
            </form>
        </div>
    )
}