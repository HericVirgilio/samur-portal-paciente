import Image from 'next/image'

export default function Header() {
    return(
        <div className='m-[30px]'>
            <Image src="/images/samur-principal.png" alt="" width={150} height={80}/>
        </div>
    )
}