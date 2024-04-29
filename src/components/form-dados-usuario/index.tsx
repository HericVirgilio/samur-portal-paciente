import "./style.css";
import Image from "next/image";

export default function FormularioDadosUsuario() {
  return (
    <form className="FormularioUser">
      <h2>Dados Pessoais</h2>

      <div className="ContanerDadosUser">
        <span>
          <label>CPF</label>
          <input
            className="InputBox"
            type="text"
            name="cpf"
            id="cpf"
            disabled={true}
            placeholder={"082.XXX.XXX-02"}
          />
        </span>
        <span>
          <label>Nome Completo</label>
          <input
            className="InputBox"
            type="text"
            name="nomeCompleto"
            id="nomeCompleto"
            disabled={true}
            placeholder="Heric Virgilio Viana Santos"
          />
        </span>
        <span>
          <label>Email</label>
          <input
            className="InputBox"
            type="email"
            name="email"
            id="email"
            disabled={true}
            placeholder="heric.v.v.santos@gmail.com"
          />
        </span>
        <span>
          <label>Data Nascimento</label>
          <input
            className="InputBox"
            type="date"
            name="dataNasc"
            id="dataNasc"
            disabled={true}
            value="1990-01-01"
            style={{ color: "#6A6B6B" }}
          />
        </span>
        <span>
          <label>RG</label>
          <input
            className="InputBox"
            type="text"
            name="rg"
            id="rg"
            disabled={true}
            placeholder="111.111.111-01"
          />
        </span>
        <span>
          <label>Nacionalidade</label>
          <input
            className="InputBox"
            type="text"
            name="nacionalidade"
            id="nacionalidade"
            disabled={true}
            placeholder={"Brasileira"}
            style={{ color: "#6A6B6B" }}
          />
        </span>
        <span>
          <label>Sexo</label>
          <input
            className="InputBox"
            type="text"
            name="sexo"
            id="sexo"
            disabled={true}
            placeholder="Masculino"
          />
        </span>
        <span>
          <label>Nivel escolaridade</label>
          <input
            className="InputBox"
            type="text"
            name="nivelEscolaridade"
            id="nivelEscolaridade"
            disabled={true}
            placeholder="Superior Incompleto"
          />
        </span>
      </div>

      <h2>Endereço</h2>

      <div className="EnderecoUser">
        <span>
          <label style={{ marginTop: "10px" }}>Cep</label>
          <input
            className="InputBox"
            type="text"
            name="cep"
            id="cep"
            disabled={true}
            placeholder="45028-095"
          />
        </span>
        <span>
          <label>Logradouro</label>
          <input
            className="InputBox"
            type="text"
            name="logradouro"
            id="logradouro"
            disabled={true}
            placeholder="Avenida João de Aguiar"
          />
        </span>
        <span>
          <label>Complemento</label>
          <input
            className="InputBox"
            type="text"
            name="complemento"
            id="complemento"
            disabled={true}
            placeholder="Predio Verde"
          />
        </span>
        <span>
          <label>Bairro</label>
          <input
            className="InputBox"
            type="text"
            name="bairro"
            id="bairro"
            disabled={true}
            placeholder="Centro"
          />
        </span>
        <span>
          <label>Cidade</label>
          <input
            className="InputBox"
            type="text"
            name="cidade"
            id="cidade"
            disabled={true}
            placeholder="Vitoria da Conquista"
          />
        </span>
        <span>
          <label>UF</label>
          <input
            className="InputBox"
            type="text"
            name="uf"
            id="uf"
            disabled={true}
            placeholder="BA"
          />
        </span>
        <span>
          <label>Telefone 1</label>
          <input
            className="InputBox"
            type="text"
            name="telefone1"
            id="telefone1"
            disabled={true}
            placeholder="(77)999171220"
          />
        </span>
        <span>
          <label>Telefone 2</label>
          <input
            className="InputBox"
            type="text"
            name="telefone2"
            id="telefone2"
            disabled={true}
          />
        </span>
        <div className="DivBoxButton">
          <p>Editar</p>
          <Image
            className="lapisDivButton"
            src={"/icons/lapis.svg"}
            alt="lapis"
            width={20}
            height={20}
          />
        </div>
      </div>
    </form>
  );
}
