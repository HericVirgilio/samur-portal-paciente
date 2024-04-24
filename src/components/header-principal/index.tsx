import './style.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link';
import { menuHamburguerData } from '@/data/menu-hamburguer.data';
import MenuDesktop from '../menus-desktop';
export default function HeaderPrincipal() {
    const [menu, setMenu] = useState({});
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
        <div className='boxHeaderPrincipal'>

            <Image src="/icons/menu.svg" alt='' height={30} width={30} onClick={menuHamburguer} className='Hamburguer'/>
            <div className='menuHamburguer' style={menu}>
                <div className='BoxClose'>
                    <Image src="/icons/close.svg" alt='close' height={26} width={26} onClick={fecharMenu} />
                </div>
                <div className='ImagensCloseLogoSamurEncapsulamento'>
                    <div className='ImagensCloseLogoSamur'>
                        <Image src="/images/eduarda-ferreira.png" alt='' height={60} width={60} className='ImagemPerfilMenu'/>
                        <h2>Eduarda Ferreira</h2>
                    </div>
                </div>

                <div className='DivisoriaMenuBox'>

                </div>

                {menuHamburguerData.map((objeto) =>
                    <Link onClick={fecharMenu} className='BoxMapMenuHamburguer' key={objeto.key} href={`${objeto.nomeUrl}`}>
                        <Image src={objeto.url} alt={objeto.nomeUrl} height={25} width={25} />
                        <p className='TextoMapMenuHamburguer'>{objeto.nome}</p>
                    </Link>
                )}
            </div>
            <Link href={"/home"}>
                <Image src="/images/logo-samur-branco.webp" alt='logo samur' width={200} height={100} />
                <MenuDesktop />
            </Link>

            <Link href={"/minha-conta"}>
                <Image src="/icons/user.svg" alt='usuario' height={30} width={30} className='divIconUser' />
            </Link>

        </div>
    )
}