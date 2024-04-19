import './style.css'
import Image from 'next/image'
import { UsuarioInterface } from '@/interface/user.interface';
import Link from 'next/link';

export default function BoxUserPrincipal(props: { objeto: UsuarioInterface }) {
    return (
        <div className='Container'>
            <Link href={"/usuario"} className='boxUserPrincipal'>
                <div >
                    <Image src={props.objeto.urlImg} alt='' height={60} width={60} className='ImagemPerfil' />
                </div>
                <div className='BoxWelcomeEmail'>
                    <h2>Bem-vinda, <br /> {props.objeto.nome}</h2>
                </div>
            </Link>
        </div>
    );
}