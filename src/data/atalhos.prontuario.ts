import { AtalhoInterface } from "@/interface/atalhos.interface";

export const AtalhosProntuarios:AtalhoInterface [] = [
    {
        key: 4,
        nome: "Vacinas",
        nomeUrl:"/prontuario/vacinas",
        url: "http://localhost:3000/icons/vacina.svg"
    },
    {
        key: 5,
        nome: "Doenças Prévias",
        nomeUrl:"/prontuario/doencas-previas",
        url: "http://localhost:3000/icons/doencas-previas.svg"
    },
    {
        key: 6,
        nome: "Alergias",
        nomeUrl:"/prontuario/alergias",
        url: "http://localhost:3000/icons/alergias.svg"
    },
    {
        key: 7,
        nome: "Medicamentos em uso",
        nomeUrl:"/prontuario/medicamentos-em-uso",
        url: "http://localhost:3000/icons/medicamentos-em-uso.svg"
    }
]