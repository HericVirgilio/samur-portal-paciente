import Link from "next/link";
import HeaderPrincipal from "@/components/header";
import BoxUserPrincipal from "@/components/box-user-principal";
import NovoAgendamentoPrincipal from "@/components/box-novo-agendamento";
export default function Home() {
  return (
    <main>
      <HeaderPrincipal/>
      <Link href={'/login'}>ir para login</Link>
      <BoxUserPrincipal/>
      <NovoAgendamentoPrincipal/>
    </main>
  );
}
