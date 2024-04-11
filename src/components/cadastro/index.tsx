import "./style.css"
import { FormEvent, useState } from "react";
import { FormData } from "@/interface/form-data.interface";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import BotaoEnviarFormulario from "../botao-login-cadastro";

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
            <form className="DivCadastroForm" onSubmit={EnviarFormulario} >
                <FormControl sx={{ m: 1, width: '80vw'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" size="small">Email</InputLabel>
                    <OutlinedInput value={email} onChange={(e) => setEmail(e.target.value)}
                        type={'email'}
                        label="Email" 
                        size="small"/>
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" size="small" >Senha</InputLabel>
                    <OutlinedInput value={senha} onChange={(e) => setSenha(e.target.value)}
                        size="small"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        } label="Senha" />
                </FormControl>
                <FormControl sx={{ m: 1, width: '80vw' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password"  size="small">Digite a senha novamente</InputLabel>
                    <OutlinedInput value={senha2} onChange={(e) => setSenha2(e.target.value)}
                         size="small"
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
                <BotaoEnviarFormulario text="Continuar"/>
            </form>
            <div className="RequisitosSenha">
                <h5>A senha deve conter:</h5>

                <p>Letras e números</p>
                <p>No minimo 5 caracteres</p>
            </div>
        </div>
    )
}