import "./style.css";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { menuHamburguerData } from "@/data/menu-hamburguer.data";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function MenuAnimation() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const TransformaScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", TransformaScroll);

    return () => {
      window.removeEventListener("scroll", TransformaScroll);
    };
  }, []);

  const IrPara = (url: string) => {
    router.push(url);
  };
  return (
    <div className={scrolled ? "Scrolled" : "ContainerMenuAnimeted"}>
      <div className="AgrupamentoItens">
        <Link key={"home"} href={"/home"} className="ContainerHeader">
          <Image
            src={
              scrolled
                ? "/images/samur-principal.png"
                : "/images/logo-samur-branco.webp"
            }
            alt="logo samur"
            width={200}
            height={100}
            className={scrolled ? "LogoScrolled" : ""}
          />
        </Link>
        <div className="ContainerAtalhosMenuHamburguer">
          <ul className="AtalhosMenuHamburguer">
            {menuHamburguerData.map(
              (objeto, index) =>
                index !== menuHamburguerData.length - 1 && (
                  <Link key={objeto.key} href={objeto.nomeUrl}>
                    <li
                      style={{
                        fontFamily: "Yantramanav, sans-serif",
                        fontWeight: "700",
                        fontSize: "19px",
                        letterSpacing: "2px",
                        color: scrolled ? "black" : "white",
                      }}
                      key={objeto.key}
                      onClick={() => IrPara(objeto.nomeUrl)}
                    >
                      {objeto.nome}
                    </li>
                  </Link>
                )
            )}
          </ul>
        </div>
        <div className="ContainerAvatarBoxHover">
          <Link key={"minha-conta"} href={"/minha-conta"} className="LinkContainer">
            <Avatar className="divIconUser">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
          <div className="MenuHoverProfile">
            <ul>
              <li className="ItensListaHeader">Minha Conta</li>
              <li className="ItensListaHeader">Familiares</li>
              <li className="ItensListaHeader">Formas de Pagamento</li>
              <li className="ItensListaHeader">Notificações</li>
              <li className="ItensListaHeader">Meus Pagamentos</li>
              <li className="ItensListaHeader">Excluir conta</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
