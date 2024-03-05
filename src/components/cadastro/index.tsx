import "./style.css"
import { FormEvent, useState } from "react";
import { FormData } from "@/interface/form-data.interface";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface Props {
    sendDataToParent: (data: FormData) => void;
}

export default function CadastroFormulario({ sendDataToParent }: Props) {

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [senha2, setSenha2] = useState<string>("")
    const [erroSenha, setErroSenha] = useState<string>("")
    const [showPassword, setShowPassword] = useState(false);

    const EnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (senha === senha2 && validarSenha(senha)) {
            sendDataToParent({ email, senha });
            console.log("Formulario enviado")
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

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="BoxForm">
            <div className="DivCadastroTitle">
                <h2>Cadastro</h2>
                <p>1/3</p>
            </div>
            <form className="DivCadastroForm" onSubmit={EnviarFormulario} >
            <FormControl sx={{ m: 1, width: '80vw'}} variant="outlined">
                    <InputLabel  htmlFor="outlined-adornment-password">Email</InputLabel>
                    <OutlinedInput value={email} onChange={(e) => setEmail(e.target.value)}
                        id="outlined-adornment-password"
                        type={'email'}
                        label="Email" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw'}} variant="outlined">
                    <InputLabel  htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput value={senha} onChange={(e) => setSenha(e.target.value)}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        } label="Senha" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Digite a senha novamente</InputLabel>
                    <OutlinedInput value={senha2} onChange={(e) => setSenha2(e.target.value)}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        } label="Digite a senha novamente" />
                </FormControl>
                {erroSenha && <div className="DivErro" >{erroSenha}</div>}
                <input type="submit" value="Continuar" className="InputCadastro" id="InputSenha" />
            </form>
            <div className="RequisitosSenha">
                    <h5>A senha deve conter:</h5>
                    
                    <p>Letras e números</p>
                    <p>No minimo 5 caracteres</p>
                </div>
        </div>
    )
}