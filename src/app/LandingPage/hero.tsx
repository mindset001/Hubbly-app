import React from 'react'
import Man from '../../../public/assets/man.png'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import { Raleway } from 'next/font/google';
import Link from 'next/link';

export const rale = Raleway({ subsets: ["latin"] });
function Hero() {
    return (
        <main className='hero w-full flex flex-col items-center text-[#fff]'>

            <div className='w-[80%] '>
                <div className='flex justify-between items-center mb-10 mt-6'>
                    <Image src={Logo} alt='' className='h-[37px] w-[149px]' />
                    <div className='flex justify-between text-[#fff]'>
                        <ul className='flex flex-row gap-3  text-[14px] font-[700]'>
                            {Navcontent.map((item, i: number) => (
                                <li className={`${rale.className}`}><Link href={item.link}>{item.name}</Link></li>
                            ))}

                        </ul>



                    </div>
                </div>
                <div className='flex justify-between mt-10'>
                    <div>
                        <p className={`${rale.className} text-[16px]`}>Eco-Friendly Solutions at Your Fingertips</p>
                        <h1 className='font-[700] text-[60px]'>All Your Home <br />
                            Needs in <span className='text-[#70F9FF]'>One Place</span> </h1>
                        <h2 className={`${rale.className}text-[#fff] text-[36px] font-[800]`}>Green and Convenient</h2>
                        <button className={`${rale.className} mt-4 bg-[#EFAC2B] shadow-lg rounded-[88px] h-[39px] w-[204px] text-[16px]`}>Join The Community {'>'} </button>
                    </div>
                    <Image src={Man} alt='' className='w-[422px] h-[422px]' />
                </div>
            </div>
        </main>
    )
}

export default Hero

const Navcontent = [
    {
        link: '/about',
        name: 'About Us'
    },
    {
        link: '#services',
        name: 'Why Choose Hubbly'
    },
    {
        link: '#competencies',
        name: 'How Hubbly Works'
    },
    {
        link: '#contact',
        name: 'Our Offerings'
    },


]