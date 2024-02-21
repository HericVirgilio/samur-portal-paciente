import './style.css'
import Image from 'next/image'
export default function BoxUserPrincipal() {
    return (
        <div className='boxUserPrincipal'>
            <div className='BoxImagePerfil'>
                <Image className='avatarUser' src="/images/perfil-icon.png" alt='perfilUser' width={60} height={60} />
            </div>
            <div className='BoxWelcomeEmail'>
                <h2>Bem-vindo, Eduarda Ferreira</h2>
                <div className='boxIconEmail'>
                    <Image  src="/icons/envelope.svg" alt='perfilUser' width={20} height={20} />
                    <p>duda.ferreira@gmail.com</p>
                </div>
            </div>
        </div>
    )
}