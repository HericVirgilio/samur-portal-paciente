import Image from 'next/image'
import "./style.css"

export default function Header() {
    return(
        <div className='DivBoxHeaderPrincipal' >
            <Image src="/images/samur-principal.png" alt="" width={250} height={150} priority />
        </div>
    )
}