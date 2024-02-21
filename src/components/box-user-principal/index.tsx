import './style.css'
import Image from 'next/image'
import { Avatar, AvatarFallback,AvatarImage} from "@/components/ui/avatar"
export default function BoxUserPrincipal() {
    return (
        <div className='boxUserPrincipal'>
           <div className='BoxImagePerfil' >
               <Avatar>
                    <AvatarImage src='/images/perfil-icon.png' alt=""/>
                    <AvatarFallback>SM</AvatarFallback>
               </Avatar>
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