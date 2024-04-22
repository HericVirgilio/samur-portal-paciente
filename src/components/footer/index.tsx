import "./style.css"
import Image from "next/image"
import Link from "next/link"
import { menuHamburguerData } from "@/data/menu-hamburguer.data"
import { useRouter } from "next/navigation"
import { MidiasSocaisData } from "@/data/midias-sociais.data"
export default function Footer() {

    const router = useRouter()

    const IrPara = (url: string) => {
        router.push(url)
    }
    return (
        <footer className="ContainerFooter">
            <div className="CapsulaComponentesCima">
                <div className="DivImg">
                    <Image src={"/images/samurFooter.png"} alt="" width={120} height={120} />
                </div>
                <div>
                    <span>Navegação</span>
                    <ul>
                        {menuHamburguerData.map((objeto, index) => 
                         index !== menuHamburguerData.length - 1 &&(
                            <li key={objeto.key} onClick={(() => IrPara(objeto.nomeUrl))}>{objeto.nome}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <span>Contate-nos</span>
                    <ul>
                        {MidiasSocaisData.map((objeto) => (
                            <a className="ItensLista Contato" key={objeto.key} href={objeto.link} target="_blank" rel="follow">
                                <Image src={objeto.img} alt={objeto.titulo} width={20} height={20}/>
                                <li>{objeto.titulo}</li>
                            </a>
                        ))}
                    </ul>
                </div>
                <div>
                    <span>Hospital Samur</span>
                    <ul className="ItensLista">
                        <li>Sobre</li>
                        <li>Ajuda/FAQ</li>
                        <li>Termos de Uso</li>
                        <li>Politíca de Privacidade</li>
                        <li>Trabalhe Conosco</li>
                    </ul>
                </div>
            </div>
            <div className="LinhaDivisoria"></div>
            <div className="Desenvolvedores">
                <Link href={"#"}>
                    <h5>Desenvolvimento STI |  &copy; SA SAMUR</h5>
                </Link>
            </div>
        </footer>
    )
}