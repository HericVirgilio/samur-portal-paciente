import './style.css'
import Image from 'next/image'
export default function EntrarGoogle(){
    return(
        <div className='BoxEntrarGoogle'>
            <Image src={'/images/logo-google.png'} width={20} height={20} alt='google'/>
            <h3 className='textGoogle'>Entrar com Google</h3>
        </div>
    )
}