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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="IconEmail">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <p>duda.ferreira@gmail.com</p>
                </div>
            </div>
        </div>
    )
}