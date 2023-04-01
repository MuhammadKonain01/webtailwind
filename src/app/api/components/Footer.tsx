import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='md:flex align-middle gap-[30px] px-[60px] py-[60px] bg-black'>
        
        <div className='md:w-1/4 pb-[20px]'>
    <h1 className='text-white text-2xl font-bold mb-[20px ]'>About Us</h1>
    <Image src='/logo1.png' alt='Panaverse' width={120} height={120} className='pt-[20px]'/>
    <p className='text-gray-600 pr-[40px] pt-[20px]'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread</p>
    </div>
        
        <div className='md:w-1/4 mb-[20px] md:mb-[0]'>
            <h1  className='text-white text-2xl font-bold'>Useful Links</h1>
        <ul className='text-gray-600 pt-[30px]'>
            <li><Link href={'./'} className='hover:text-white'>Home</Link></li>
            <li><Link href={'./'} className='hover:text-white'>Explore</Link></li>
            <li><Link href={'./'} className='hover:text-white'>About</Link></li>
            <li><Link href={'./'} className='hover:text-white'>Contact</Link></li>
        </ul>
        </div>


        <div className='md:w-1/4 mb-[20px] md:mb-[0]'>
            <h1 className='text-white text-2xl font-bold'>FOllow US</h1>
            <ul className='text-gray-600 pt-[30px]'>
            <li><Link href={'./'} className='hover:text-white'>Facebook</Link></li>
            <li><Link href={'./'} className='hover:text-white'>Twitter</Link></li>
            <li><Link href={'./'} className='hover:text-white'>LinkedIn</Link></li>
            <li><Link href={'./'} className='hover:text-white'>Github</Link></li>
        </ul>
            </div>

        <div className='md:w-1/4 mb-[20px] md:mb-[0]'>
            <h1 className='text-white text-2xl font-bold'>Contact Us</h1>
            <ul className='text-gray-600 pt-[30px]'>
            <li><Link href={'./'} className='hover:text-white'>+92321-12345678</Link></li>
            <li><Link href={'./'} className='hover:text-white'>abc@gmail.com</Link></li>
            <li><Link href={'./'} className='hover:text-white'>Karachi, Pakistan</Link></li>

        </ul>
        </div>


    </div>

    </>
  )
}
