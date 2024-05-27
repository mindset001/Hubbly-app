'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Raleway } from 'next/font/google'
import Image from 'next/image'
import Logo from '../../../public/assets/logo.png'
import Face from '../../../public/assets/face.png'
import Twit from '../../../public/assets/twit.png'
import Lin from '../../../public/assets/link.png'
import Inst from '../../../public/assets/inst.png'
import Phone from '../../../public/assets/phone.png'
import Msg from '../../../public/assets/msgg.png'


const rale = Raleway({ subsets: ["latin"] });
function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);
  return (
    <footer className='w-full'>
        <div className='w-full bg-[#048392] px-[2] flex justify-center items-center text-[#fff]'>
            <div className='flex flex-col lg:flex-row justify-between w-[70%] py-10'>
                <div>
                <Image src={Logo} alt='' className='w-[149px] h-[37px]'/>
            </div>
            <div className=''>
                <div className='flex items-center'>
                <Image src={Phone} alt='' className='w-[24px] h-[24px]'/>
                <p className='text-[20px] font-[700] ml-6'>0115 990 2076</p>
                </div>
                <div className='flex items-center mt-4'>
                <Image src={Msg} alt='' className='w-[24px] h-[20px]'/>
                <p className='hover:underline font-[700] text-[20px] ml-6'>info@hubbly.me</p>
                </div>
                <div className='flex mt-6'>
                    <Image src={Face} alt='' className='w-[60px] h-[60px]'/>
                    <Image src={Inst} alt=''  className='w-[60px] h-[60px]'/>
                    <Image src={Twit} alt=''  className='w-[60px] h-[60px]'/>
                    <Image src={Lin} alt=''  className='w-[60px] h-[60px]'/>
                </div>
            </div>

            <div className='flex justify-between'>
        <ul className='flex flex-col gap-3  text-[14px] font-[700]'>
                            {Navcontent.map((item, i: number) => (
                                <li className={`${rale.className}`}><Link href={item.link}>{item.name}</Link></li>
                            ))}

                            

                        </ul>

                       
                     
        </div>
        <div>
        <ul className='flex flex-col gap-3  text-[14px] font-[700]'>
                            {Navcontent2.map((item, i: number) => (
                                <li className={`${rale.className} `}><Link href={item.link}>{item.name}</Link></li>
                            ))}
                       
                        </ul>
                        <button className='mt-4 bg-[#EFAC2B] shadow-lg rounded-[88px] h-[39px] w-[149px]'>Download</button>
        </div>
            </div>
        </div>
        <div className='py-10'>
        <p className={`${rale.className}  mt-4 text-center text-[#000000] font-[400] text-[14px]`}>Copyright © <span>{`${year} by asteria. All Rights reserved.`}</span> </p>
                      
        </div>
    </footer>
  )

}

export default Footer

const Navcontent = [
    {
        link: '#about',
        name: 'About Us'
    },
    {
        link: '#choose',
        name: 'Why Choose Hubbly'
    },
    {
        link: '#how-we-work',
        name: 'How Hubbly Works'
    },
    {
        link: '#offerings',
        name: 'Our Offerings'
    },
   

]

const Navcontent2 = [
    {
        link: '/about',
        name: 'Privacy Policy'
    },
    {
        link: '#services',
        name: 'Terms and  Conditions'
    },
   
   

]