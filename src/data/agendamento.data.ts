import { GenericoInterfaceTabelaAgendamento } from "@/interface/agendamento.interface";

export const AgendamentoData: GenericoInterfaceTabelaAgendamento [] = [
    {
        key: 0,
        nome: "Stella Ferreira",
        data: new Date(1995,10,17),
        primeiraColuna: "Horário",
        primeiraColunaRes: "15:30",
        segundaColuna: "Exame",
        segundaColunaRes: "Raio X",
        terceiraColuna: "Status",
        terceiraColunaRes: "Agendado"
    },
    {
        key: 1,
        nome: "João Silva",
        data: new Date(1990,5,25),
        primeiraColuna: "Horário",
        primeiraColunaRes: "10:00",
        segundaColuna: "Exame",
        segundaColunaRes: "Tomografia",
        terceiraColuna: "Status",
        terceiraColunaRes: "Pendente"
    },
    {
        key: 2,
        nome: "Maria Souza",
        data: new Date(1988,3,12),
        primeiraColuna: "Horário",
        primeiraColunaRes: "09:45",
        segundaColuna: "Exame",
        segundaColunaRes: "Ultrassonografia",
        terceiraColuna: "Status",
        terceiraColunaRes: "Cancelado"
    },
    {
        key: 3,
        nome: "Carlos Oliveira",
        data: new Date(1975,8,30),
        primeiraColuna: "Horário",
        primeiraColunaRes: "13:20",
        segundaColuna: "Exame",
        segundaColunaRes: "Endoscopia",
        terceiraColuna: "Status",
        terceiraColunaRes: "Confirmado"
    },
    {
        key: 4,
        nome: "Ana Rodrigues",
        data: new Date(1985,6,8),
        primeiraColuna: "Horário",
        primeiraColunaRes: "11:10",
        segundaColuna: "Exame",
        segundaColunaRes: "Ressonância Magnética",
        terceiraColuna: "Status",
        terceiraColunaRes: "Agendado"
    }
]