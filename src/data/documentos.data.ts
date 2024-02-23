import { DocumentosInterface } from "@/interface/documentos.interface";

export const DocumentosData: DocumentosInterface [] = [
    {
        key: 0,
        nome: "Stella Ferreira",
        data: new Date(1995,10,17),
        finalidade: "Pedido de Exame",
        status: "Agendado"
    },
    {
        key: 1,
        nome: "João Silva",
        data: new Date(1988, 5, 25),
        finalidade: "Atestado Médico",
        status: "Concluído"
    },
    {
        key: 2,
        nome: "Maria Oliveira",
        data: new Date(2000, 2, 12),
        finalidade: "Receita Médica",
        status: "Pendente"
    },
    {
        key: 3,
        nome: "Rafael Santos",
        data: new Date(1979, 8, 7),
        finalidade: "Pedido de Exame",
        status: "Em espera"
    }
]