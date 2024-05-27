import { Raleway } from 'next/font/google';
import React from 'react'
import Mic from '../../../public/assets/mic.png'
import Lock from '../../../public/assets/lock.png'
import Veri from '../../../public/assets/Rectangle 21845.png'
import Clock from '../../../public/assets/Rectangle 21847.png'
import Image from 'next/image';

const rale = Raleway({ subsets: ["latin"] });
function Choose() {
  return (
    <main className='w-full flex flex-col items-center my-20'>
        <div className='text-center'>
            <h2 className='text-[20px] lg:text-[35px] font-[700] text-center lg:text-left '>Why Choose Hubbly</h2>
            <h1 className={`${rale.className} text-center lg:text-left text-[35px] md:text-[50px] lg:text-[60px] font-[700] capitalize text-[#048392] lg:leading-[68.68px]`}>Quality Home services <span className='font-[400]'>at the <br className='hidden lg:block'/> best price</span></h1>
        </div>

        <div className='w-full flex flex-col items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full lg:w-[80%] items-center mt-6'>
                    {Navcontent.map((item, i: number) => (
                     
                            <div className='bg-[#04839226] rounded-[33px] h-[243px] w-[229px] flex flex-col justify-center text-center items-center mt-4'>
                                <div className='bg-[#fff] p-6 rounded-[33px] mb-4'>
                                <Image src={item.img} alt='' className='w-[68px] h-[68px]' />
                                </div>
                            <p className={`${rale.className}text-[#fff] px-10 `}>{item.name}</p>
                                
                            </div>
                      
                    ))}

                </div>
        </div>
    </main>
  )
}

export default Choose

const Navcontent = [
    {   img: Veri,
        name: 'Verified Hubblers'
    },
    {   
        img: Clock,
        name: 'Transparent & Instant Booking'
    },
    {   
        img: Mic,
        name: '24/7 support'
    },
    {   
        img: Lock,
        name: 'Secure Payment Options'
    },


]