export interface FormData {
    email: string;
    senha: string;
}
export interface FormDataDados {
    nome: string;
    cpf: string;
    rg: string;
    genero: string;
    data: string;
    escolaridade: string;
    nacionalidade: string;
}
export interface FormDataEndereco {
    cep: string;
    bairro: string;
    logradouro: string;
    numero: number;
    complemento: string;
    telefone1: string;
    telefone2: string;
    localidade: string;
    uf: string;
}