import "./style.css";
import Image from "next/image";
import Link from "next/link";
import { menuHamburguerData } from "@/data/menu-hamburguer.data";
import { useRouter } from "next/navigation";
import { MidiasSocaisData } from "@/data/midias-sociais.data";
export default function Footer() {
  const router = useRouter();

  const IrPara = (url: string) => {
    router.push(url);
  };
  return (
    <footer className="ContainerFooter">
      <div></div>
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
              <div key={objeto.key} className="ImagensMidias">
                <Image
                  src={objeto.img}
                  alt={objeto.titulo}
                  width={20}
                  height={20}
                />
                <span style={{ fontSize: "14px", fontWeight: "200" }}>
                  {objeto.titulo}
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
