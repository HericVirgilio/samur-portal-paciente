import "./style.css"
import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return (
        <footer className="ContainerFooter">
            <div className="CapsulaComponentesCima">
                <div className="DivImg">
                    <Image src={"/images/samurFooter.png"} alt="" width={120} height={120} />
                </div>
                <div>
                    <span>Navegação</span>
                    <ul className="ItensLista">
                        <li>Home</li>
                        <li>Agendamento</li>
                        <li>Documentos</li>
                        <li>Financeiro</li>
                        <li>Orçamento</li>
                        <li>Prontuário</li>
                        <li>Resultdos</li>
                    </ul>
                </div>
                <div>
                    <span>Contate-nos</span>
                    <ul className="ItensLista Contato">
                        <Image src={"/midias/twitter.png"} alt="twitter" width={20} height={20}/>
                        <li>Twitter</li>
                        <Image src={"/midias/facebook.png"} alt="facebook" width={20} height={20}/>
                        <li>Facebook</li>
                        <Image src={"/midias/instagram.png"} alt="instagram" width={20} height={20}/>
                        <li>Instagram</li>
                        <Image src={"/midias/linkedin.png"} alt="Linkedin" width={20} height={20}/>
                        <li>Linkedin</li>
                        <Image src={"/midias/telefone.png"} alt="telefone" width={20} height={20}/>
                        <li>Telefone</li>
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