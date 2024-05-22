import { Raleway } from 'next/font/google';
import React from 'react'
import Down from '../../../public/assets/Frame 429.png'
import Star from '../../../public/assets/Frame 430.png'
import Frame from '../../../public/assets/Frame 431.png'
import Image from 'next/image';

const rale = Raleway({ subsets: ["latin"] });
function About() {
    return (
        <main className='w-full flex flex-col items-center my-20'>
            <div className='w-[80%]'>
                <div className='text-center'>
                    <p className='text-[35px] font-[700]'>About Us</p>
                    <h1 className={`${rale.className} capitalize text-[60px] font-[700] text-[#048392]`}>providing home services</h1>
                    <p className={`${rale.className} text-[18px] my-6`}>Experience hassle-free home services with Hubbly.
                        Say goodbye to chores and scheduling stress.
                        Your trusted partner for reliable services. We're a
                        vibrant community of like-minded individuals dedicated
                        to promoting responsible living and environmental stewardship.</p>
                    <p className={`${rale.className} capitalize text-[18px] font-[700] text-[#048392] mb-20`}>Empowering Users, Empowering Communities</p>
                </div>
                <div></div>
            </div>
            <div className='w-[50%] h-[200px] bg-[#000] mt-6 rounded-lg z-10'>

            </div>
            <div className='w-full bg-[#048392] mt-[-50px] z-0 flex flex-col items-center text-[#000] pb-10'>
                <div className='mt-[10%] flex flex-row gap-10 justify-between'>
                    <div className='flex items-center '>
                        <div>
                            <Image src={Down} alt='' className='w-[55px] h-[55px]'/>
                        </div>
                        <div className='ml-2'>
                            <h1 className='text-[30px] font-[700] text-[#62C1C5] '>1.2M</h1>
                            <p className={`${rale.className} capitalize text-[14px] mt-[-5px]  font-[600] text-[#62C1C5]`}>Downloads</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <Image src={Star} alt='' className='w-[55px] h-[55px]'/>
                        </div>
                        <div className='ml-2'>
                            <h1 className='text-[30px] font-[700] text-[#62C1C5] '>4.8</h1>
                            <p className={`${rale.className} capitalize text-[14px] mt-[-5px]  font-[600] text-[#62C1C5]`}>AVG Ratings</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <Image src={Frame} alt='' className='w-[55px] h-[55px]'/>
                        </div>
                        <div className='ml-2'>
                            <h1 className='text-[30px] font-[700] text-[#62C1C5] '>93k</h1>
                            <p className={`${rale.className} capitalize text-[14px] mt-[-5px]  font-[600] text-[#62C1C5]`}>Reviews</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default About