import Image from 'next/image'
import "./style.css"

export default function Header() {
    return(
        <div className='DivBoxHeaderPrincipal' >
            <Image src={"/icons/voltarHeaderCadastro.svg"} alt='Voltar' width={35}  height={35} className='imgVoltar'/>
            <Image src="/images/samur-principal.png" alt="" width={250} height={150} priority />      
        </div>
    )
}