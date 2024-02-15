import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1 className={"font-bold"}>Pagina Inicial</h1>
      <Link href={'/login'}>ir para login</Link>
    </main>
  );
}
