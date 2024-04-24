import "./style.css"
import Image from "next/image"
export default function Banner () {
    return(
        <div className="ContainerBanner"> 
            <div className="CardBanner" >
                <Image src={"/images/1.jpg"} alt="" width={500} height={500} className="CardsBanner" id="PrimeiraImg"/>
            </div>
            <div className="CardBanner image2">
                <Image src={"/images/2.jpg"} alt="" width={500} height={500} className="CardsBanner"/>
            </div>
            <div className="CardBanner image3">
                <Image src={"/images/3.jpg"} alt="" width={500} height={500} className="CardsBanner"/>
            </div>
            <div className="CardBanner image4">
                <Image src={"/images/4.jpg"} alt="" width={500} height={500} className="CardsBanner"/>
            </div>
            <div className="CardBanner image5">
                <Image src={"/images/5.jpg"} alt="" width={500} height={500} className="CardsBanner" 
                id="UltimaImg"/>
            </div>
        </div>
    )
}