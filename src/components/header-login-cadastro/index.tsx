import Image from 'next/image'

export default function Header() {
    return(
        <div style={{margin: "30px"}}>
            <Image src="/images/samur-principal.png" alt="" width={150} height={80} priority />
        </div>
    )
}