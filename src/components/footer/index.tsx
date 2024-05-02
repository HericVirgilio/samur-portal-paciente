import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MidiasSocaisData } from "@/data/midias-sociais.data";

export default function Footer() {
  const router = useRouter();

  const IrPara = (url: string) => {
    router.push(url);
  };
  return (
    <footer style={{position: "relative"}} >
      <div className="ContainerFooter"></div>
      <div className="ContainerSamur">
        <span>Hospital Samur</span>
        <ul className="ItensLista" style={{ marginTop: "8px" }}>
          <li>Sobre</li>
          <li>Ajuda/FAQ</li>
          <li>Termos de Uso</li>
          <li>Politíca de Privacidade</li>
          <li>Trabalhe Conosco</li>
        </ul>
        <div style={{ marginTop: "3px" }}>
          <ul className="MidiasSociais">
            {MidiasSocaisData.map((objeto) => (
              <Link href={objeto.link} key={objeto.key} className="ImagensMidias" target="_blank" rel="follow">
                <Image
                  src={objeto.img}
                  alt={objeto.titulo}
                  width={20}
                  height={20}
                />
                <span style={{ fontSize: "14px", fontWeight: "200" }}>
                  {objeto.titulo}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
