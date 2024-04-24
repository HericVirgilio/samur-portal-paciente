import "./style.css"
import Image from "next/image"
import Link from "next/link"
export default function Whatsapp(){
    return(
        <Link href={"https://api.whatsapp.com/send?phone=557721028400&text=Ol%C3%A1%20Hospital%20Samur%2C%20estou%20vindo%20do%20site!"} target="_blank" rel="follow" className="Container">
            <Image src={"/images/whatsapp.png"} alt="whatsapp" width={70} height={70}/>
        </Link>
    )
}