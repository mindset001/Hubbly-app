import { Raleway } from 'next/font/google';
import React from 'react'
import Mic from '../../../public/assets/mic.png'
import Image from 'next/image';

const rale = Raleway({ subsets: ["latin"] });
function Choose() {
  return (
    <main className='w-full flex flex-col items-center my-20'>
        <div className='text-center'>
            <h2 className='text-[35px] font-[700]'>Why Choose Hubbly</h2>
            <h1 className={`${rale.className} text-[60px] font-[700] capitalize text-[#048392] leading-[68.68px]`}>Quality Home services <span className='font-[400]'>at the <br /> best price</span></h1>
        </div>

        <div className='grid grid-cols-4 gap-4  w-[80%] mt-6'>
                    {Navcontent.map((item, i: number) => (
                     
                            <div className='bg-[#04839226] rounded-[33px] h-[243px] w-[229px] flex flex-col justify-center text-center items-center mt-4'>
                                <div className='bg-[#fff] p-6 rounded-[33px] mb-4'>
                                <Image src={item.img} alt='' className='w-[68px] h-[68px]' />
                                </div>
                            <p className={`${rale.className}text-[#fff] px-10 `}>{item.name}</p>
                                
                            </div>
                      
                    ))}

                </div>
    </main>
  )
}

export default Choose

const Navcontent = [
    {   img: Mic,
        name: 'Verified Hubblers'
    },
    {   
        img: Mic,
        name: 'Transparent & Instant Booking'
    },
    {   
        img: Mic,
        name: '24/7 support'
    },
    {   
        img: Mic,
        name: 'Secure Payment Options'
    },


]