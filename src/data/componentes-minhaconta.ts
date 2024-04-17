import { MinhaContaInterface } from "@/interface/minha-conta.interface"

export  const ComponentesMinhaConta:MinhaContaInterface [] = [
    {
        id: 1,
        titulo: "Minha Conta",
        img: "/icons/userMinhaConta.svg",
        url: "/minha-conta/usuario"
    },
    {
        id: 2,
        titulo: "Familiares",
        img: "/icons/user-group.svg",
        url: "/minha-conta/familiares"
    },
    {
        id: 3,
        titulo: "Formas de pagamento",
        img: "/icons/credit-card.svg",
        url: "/minha-conta/formas-de-pagamento"
    },
    {
        id: 4,
        titulo: "Notificações",
        img: "/icons/envelope.svg",
        url: "/minha-conta/notificacoes"
    },
    {
        id: 5,
        titulo: "Meus Pagamentos",
        img: "/icons/banknotes.svg",
        url:"/minha-conta/meus-pagamentos"
    },
    {
        id: 6,
        titulo: "Excluir conta",
        img: "/icons/trash.svg",
        url: "/minha-conta/excluir-conta"
    }
]