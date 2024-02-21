import './style.css'
import Image from 'next/image'
import { useState } from 'react'
export default function HeaderPrincipal() {
    const[menu, setMenu] = useState({});
    const menuHamburguer = () => {
        setMenu({
            position: "fixed",
            top: "0",
            left: "0",
            display: "block",
            zIndex: 2,
            width: "100vw",
            height: "100vh"
        });
    }
    const fecharMenu = () => {
        setMenu({
            display: "none"
        })
    }
    return (
        <div  className='boxHeaderPrincipal'>

            <Image src="/icons/menu.svg" alt='' height={30} width={30} onClick={menuHamburguer} />
            <div className='menuHamburguer' style={menu}>
                <div className='ImagensCloseLogoSamur'>
                    <Image src="/icons/close.svg" alt='close' height={25} width={25} onClick={fecharMenu}/>
                    <Image src="/images/samur-secundaria.png" alt='samur logo' width={100} height={75}/>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Agendamento</li>
                    <li>Documentos</li>
                    <li>Financeiro</li>
                    <li>Orçamento</li>
                    <li>Prontuário</li>
                    <li>Resultados</li>
                </ul>
            </div>
            <Image src="/images/samur-principal.png" alt='logo samur' width={150} height={100} className='divIconLogo' />

            <Image src="/icons/user.svg" alt='' height={30} width={30} className='divIconUser' />

        </div>
    )
}