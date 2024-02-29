import "./style.css"
import { FormaDePagamentoInterface } from "@/interface/forma.pagamento.interface"
import Image from "next/image"

export default function SelectGenerico(props: {objeto: FormaDePagamentoInterface[], placeholder: string}){
    return(
        <div>
            <div className="SelectFlechaDropDown">
                <p>{props.placeholder}</p>
                <Image src={"/icons/flecha-drop-down.svg"} alt="" height={30} width={30}/>
            </div>
            {props.objeto.map((objeto) => 
                <div>
                    
                </div>
            )}
        </div>
    )
}