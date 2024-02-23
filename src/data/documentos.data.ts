import { GenericoInterfaceTabela } from "@/interface/generico.interface";

export const DocumentosData: GenericoInterfaceTabela [] = [
    {
        key: 0,
        nome: "Stella Ferreira",
        data: new Date(1995,10,17),
        primeiraColuna: "Finalidade",
        primeiraColunaRes: "Pedido de Exame",
        segundaColuna: "Status",
        segundaColunaRes: "Agendado"
    },
    {
        key: 1,
        nome: "João Silva",
        data: new Date(1990,5,25),
        primeiraColuna: "Finalidade",
        primeiraColunaRes: "Consulta",
        segundaColuna: "Status",
        segundaColunaRes: "Confirmado"
    },
    {
        key: 2,
        nome: "Maria Souza",
        data: new Date(1988,3,12),
        primeiraColuna: "Finalidade",
        primeiraColunaRes: "Exame de Sangue",
        segundaColuna: "Status",
        segundaColunaRes: "Pendente"
    },
    {
        key: 3,
        nome: "Carlos Oliveira",
        data: new Date(1975,8,30),
        primeiraColuna: "Finalidade",
        primeiraColunaRes: "Cirurgia",
        segundaColuna: "Status",
        segundaColunaRes: "Cancelado"
    },
    {
        key: 4,
        nome: "Ana Rodrigues",
        data: new Date(1985,6,8),
        primeiraColuna: "Finalidade",
        primeiraColunaRes: "Consulta",
        segundaColuna: "Status",
        segundaColunaRes: "Agendado"
    }
]