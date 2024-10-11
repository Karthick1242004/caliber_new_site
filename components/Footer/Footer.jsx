import React from 'react'
import Image from 'next/image'
import caliberlogo from '../images/caliberlogo.png'
import Link from 'next/link'
import { AnimatedTooltipPreview } from './animatedcomb'

function Footer() {
  return (
    <div className='flex flex-row justify-between align-middle items-center px-[5%] py-[1%] flex-wrap max-767:flex-col max-767:gap-[100px]'>
      <div>
        <Image src={caliberlogo} width={200}/>
      </div>
     <div className='flex flex-col gap-5 max-767:text-center'>
     <h1 className='metallic-text text-2xl font-semibold max-767:text-center'>Founded By  </h1>
     <div className='flex flex-col gap-3 metallic-text text-sm'>
     <p>Karthickrajan S</p>
     <p>Kamalesh J</p>
     <p>Karan M</p>
     </div>
     </div>
     <div className='flex flex-col gap-5 max-767:text-center'>
     <h1 className='metallic-text text-2xl font-semibold max-767:text-center'>Contact Us  </h1>
     <div className='flex flex-col gap-3 metallic-text text-sm'>
     <p>karthick1242004@gmail.com</p>
     <p>kamal452jk@gmail.com</p>
     <p>Karanm17ab@gmail.com</p>
     </div>
     </div>
      <div className='flex flex-col gap-4 metallic-text max-767:text-center max-767:text-xl'>
        <Link href='/'>Home</Link>
        <Link href='/'>Pricing</Link>
        <Link href='/'>Components</Link>
        <Link href='/'>About Us</Link>
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='metallic-text text-3xl max-767:text-center font-semibold'>Follow us on </h1>
        <AnimatedTooltipPreview/>
      </div>
    </div>
  )
}

export default Footer
