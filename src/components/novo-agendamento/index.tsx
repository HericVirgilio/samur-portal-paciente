import './style.css'
import Image from 'next/image'
export default function NovoAgendamentoPrincipal(){
    return(
        <div className="BoxNovoAgendamento">
            <Image className='imagemNovoAgendamento' src="/icons/plus-circle.svg" alt='plus' width={50} height={50}/>
            <h3>Novo agendamento</h3>
        </div>
    )
}