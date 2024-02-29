import './style.css'
import Image from 'next/image'
import { Avatar, AvatarFallback,AvatarImage} from "@/components/shadcn/avatar"
import { UsuarioInterface } from '@/interface/user.interface';
import Link from 'next/link';

export default function BoxUserPrincipal(props: { style: string, objeto: UsuarioInterface }) {
    return (
        <Link href={"/usuario"} className='boxUserPrincipal' style={{ backgroundColor: props.style }}>
           <div className='BoxImagePerfil' >
               <Avatar>
                    <AvatarImage src={props.objeto.urlImg} alt=""/>
                    <AvatarFallback>SM</AvatarFallback>
               </Avatar>
           </div>
            <div className='BoxWelcomeEmail'>
                <h2>Bem-vindo, {props.objeto.nome}</h2>
                <div className='boxIconEmail'>
                    <Image  src="/icons/envelope.svg" alt='perfilUser' width={20} height={20} 
                    style={{ width: '20px', height: '20px' }} />
                    <p>{props.objeto.email}</p>
                </div>
            </div>
        </Link>
    );
}