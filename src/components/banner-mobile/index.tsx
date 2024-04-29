import { useEffect, useState } from "react";
import "./style.css"
import Image from "next/image";
const Imagens = [
    {
        class: "slide0 s0",
        id: "test",
        img: "/images/1.jpg",
        alt: "banner"
    },
    {
        class: "slide1",
        id: "slide1",
        img: "/images/2.jpg",
        alt: "banner"
    },
    {
        class: "slide2",
        id: "slide2",
        img: "/images/3.jpg",
        alt: "banner"
    },
    {
        class: "slide3",
        id: "slide3",
        img: "/images/4.jpg",
        alt: "banner"
    },
    {
        class: "slide4",
        id: "slide4",
        img: "/images/5.jpg",
        alt: "banner"
    }
]
export default function BannerMobile() {
    const [contador, setContador] = useState(0);
    const [marginLeft, setMarginLeft] = useState("-0%")
    useEffect(() => {
        switch (contador) {
            case 0: {
                setMarginLeft("-0%")
                break;
            }
            case 1: {
                setMarginLeft("-40%")
                break;
            }
            case 2: {
                setMarginLeft("-80%")
                break;
            }
            case 3: {
                setMarginLeft("-120%")
                break;
            }
            case 4: {
                setMarginLeft("-160%")
                break;
            }
        }
        const timer = setInterval(() => {
            setContador((contador) => (contador + 1) % Imagens.length);
        }, 5000);
    
        return () => clearInterval(timer);
    }, [contador, Imagens.length]) 

    return (
        <div className="ContainerBannerMobile">
           
                <div className='Caixa'>
                    <div className='slides'>
                        {Imagens.map((img, index) => (
                            <div key={img.class} className='slide' id={img.id} style={index === 0 ? {marginLeft: marginLeft} : {}} >
                                <Image src={img.img} alt={img.alt} width={400} height={400} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="navigation">
                    <label className="bar" id="slide0" htmlFor='slide0' onClick={(e) => { setContador(0); }}></label>
                    <label className="bar" id="slide1" htmlFor='slide1' onClick={(e) => { setContador(1); }}></label>
                    <label className="bar" id="slide2" htmlFor='slide2' onClick={(e) => { setContador(2); }}></label>
                    <label className="bar" id="slide3" htmlFor='slide3' onClick={(e) => { setContador(3); }}></label>
                    <label className="bar" id="slide4" htmlFor='slide4' onClick={(e) => { setContador(4); }}></label>
                </div>
        
        </div>
    )
}