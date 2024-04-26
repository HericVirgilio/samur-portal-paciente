import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import "./style.css";
import { FormDataEndereco } from "@/interface/form-data.interface";
import { FormEvent, useEffect } from "react";
import { useState } from "react";
import BotaoEnviarFormulario from "../botao-login-cadastro";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AlertDialogDemo } from "../shadcn/AlertDialog";

interface Props {
  sendDataToParent: (data: FormDataEndereco) => void;
}

export default function Endereco({ sendDataToParent }: Props) {
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone1, setTelefone1] = useState("");
  const [telefone2, setTelefone2] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");
  const router = useRouter();

  const buscarEnderecoPorCep = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const enderecoData: FormDataEndereco = response.data;
      setBairro(enderecoData.bairro);
      setLogradouro(enderecoData.logradouro);
      setLocalidade(enderecoData.localidade);
      setUf(enderecoData.uf);
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    }
  };

  useEffect(() => {
    FormataTelefone();
  }, [telefone1, telefone2]);

  const EnviarFormulario = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (telefone1 !== "") {
      sendDataToParent({
        cep,
        bairro,
        logradouro,
        numero,
        complemento,
        localidade,
        uf,
        telefone1,
        telefone2,
      });
      router.push("/");
    } else {
      console.log("Erro ao enviar formulario revise os dados");
    }
  };

  const FormataCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value.replace(/^(\d{5})(\d{3})$/, "$1-$2");
    }
    setCep(value);
    if (value.length === 9) {
      buscarEnderecoPorCep(value);
    }
  };
  const FormataTelefone = () => {
    if (telefone1.length <= 11) {
      setTelefone1(telefone1.replace(/(\d{2})(\d{5,6})(\d{4})/, "($1) $2-$3"));
    }
    if (telefone2.length <= 11) {
      setTelefone2(telefone2.replace(/(\d{2})(\d{5,6})(\d{4})/, "($1) $2-$3"));
    }
  };

  return (
    <div className="BoxForm">
      <form className="DivCadastroForm" onSubmit={EnviarFormulario}>
        <FormControl
          className="FormControl"
          variant="outlined"
          onChange={FormataCep}
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            size="small"
            required
          >
            CEP
          </InputLabel>
          <OutlinedInput
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            size="small"
            type={"text"}
            label="CEP"
            inputProps={{
              maxLength: 9,
            }}
          />
        </FormControl>
        <FormControl className="FormControl" variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            size="small"
            required
          >
            Bairro
          </InputLabel>
          <OutlinedInput
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            size="small"
            type={"text"}
            label="Bairro"
          />
        </FormControl>
        <div className="agrupamentoInputEndereco">
          <FormControl
            className="InputLogradouro"
            sx={{ m: 1, width: "40vw" }}
            variant="outlined"
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              size="small"
              required
            >
              Logradouro
            </InputLabel>
            <OutlinedInput
              value={logradouro}
              onChange={(e) => setLogradouro(e.target.value)}
              size="small"
              type={"text"}
              label="Logradouro"
            />
          </FormControl>
          <FormControl className="InputNumero" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" size="small">
              Número
            </InputLabel>
            <OutlinedInput
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              size="small"
              type={"text"}
              label="Número"
            />
          </FormControl>
        </div>
        <FormControl className="FormControl" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size="small">
            Complemento
          </InputLabel>
          <OutlinedInput
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            size="small"
            type={"text"}
            label="Complemento"
          />
        </FormControl>
        <FormControl className="FormControl" variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            size="small"
            required
          >
            Cidade
          </InputLabel>
          <OutlinedInput
            value={localidade}
            onChange={(e) => setLocalidade(e.target.value)}
            size="small"
            type={"text"}
            label="Cidade"
          />
        </FormControl>
        <FormControl className="FormControl" variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            size="small"
            required
          >
            Estado
          </InputLabel>
          <OutlinedInput
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            size="small"
            type={"text"}
            label="Estado"
          />
        </FormControl>
        <FormControl className="FormControl" variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            size="small"
            required
          >
            Telefone1
          </InputLabel>
          <OutlinedInput
            value={telefone1}
            onChange={(e) => setTelefone1(e.target.value)}
            size="small"
            inputProps={{
              maxLength: 14,
            }}
            type={"text"}
            label="Telefone1"
          />
        </FormControl>
        <FormControl className="FormControl" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size="small">
            Telefone2
          </InputLabel>
          <OutlinedInput
            value={telefone2}
            onChange={(e) => setTelefone2(e.target.value)}
            size="small"
            inputProps={{
              maxLength: 16,
            }}
            type={"text"}
            label="Telefone2"
          />
        </FormControl>
        <div className="AgrupamentoSelect">
          <AlertDialogDemo objeto="Li e aceito a política de privacidade !" />
          <AlertDialogDemo objeto="Aceito compartilhar os meus dados pessoais !" />
        </div>

        <BotaoEnviarFormulario text="Cadastrar" />
      </form>
    </div>
  );
}
