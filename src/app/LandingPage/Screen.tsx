import React from 'react'
import Phone from '../../../public/assets/Group 44.png'
import Image from 'next/image'
import { Raleway } from 'next/font/google';

const rale = Raleway({ subsets: ["latin"] });
function Screen() {
  return (
    <main className='bg-[#09717E] w-full flex items-center flex-col text-center py-20'>
            <div className='w-[80%]'>
            <div>
                <h2 className='text-[20px] md:text-[35px] font-[700] text-[#fff]'>Beautiful Screen</h2>
                <h1 className={`${rale.className} capitalize text-[35px] md:text-[60px] font-[700] text-[#fff] mb-6`}>Views From The App</h1>
                <p className={`${rale.className} text-[18px] font-[500] text-[#fff] px-4`}>Our team of experts is committed to delivering excellence 
                    in every service we offer. Whether you need help with
                     house cleaning, dog walking, or in-house cooking, 
                     you can trust Hubbly to provide reliable and eco-friendly solutions tailored to your needs.</p>
            </div>
            <div className='mt-6'>
                <Image src={Phone} alt=''/>
            </div>
            </div>
    </main>
  )
}

export default Screen