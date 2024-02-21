import './style.css'
import Image from 'next/image'
export default function HeaderPrincipal() {
    return (
        <div className='boxHeaderPrincipal'>

            <Image src="/icons/menu.svg" alt='' height={30} width={30} />

            <Image src="/images/samur-principal.png" alt='logo samur' width={150} height={100} className='divIconLogo' />

            <Image src="/icons/user.svg" alt='' height={30} width={30} className='divIconUser' />

        </div>
    )
}