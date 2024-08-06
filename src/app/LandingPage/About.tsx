'use client'
import { Raleway } from 'next/font/google';
import React from 'react'
import Down from '../../../public/assets/Frame 429.png'
import Star from '../../../public/assets/Frame 430.png'
import Frame from '../../../public/assets/Frame 431.png'
import Image from 'next/image';

import { CountUp } from 'use-count-up'

const onComplete = () => {
    // do your stuff here
    return { shouldRepeat: true, delay: 2 }
  }

const rale = Raleway({ subsets: ["latin"] });
function About() {
    return (
        <main className='w-full flex flex-col items-center my-20'>
            <div className='w-[80%]'>
                <div className='text-center'>
                    <p className='text-[20px] lg:text-[35px] font-[700]'>About Us</p>
                    <h1 className={`${rale.className} capitalize text-center lg:text-left text-[35px] md:text-[50px] lg:text-[60px] font-[700] text-[#048392]`}>providing home services</h1>
                    <p className={`${rale.className} text-[18px] my-6`}>Experience hassle-free home services with Hubbly.
                        Say goodbye to chores and scheduling stress.
                        Your trusted partner for reliable services. We're a
                        vibrant community of like-minded individuals dedicated
                        to promoting responsible living and environmental stewardship.</p>
                    <p className={`${rale.className} capitalize text-[18px] font-[700] text-[#048392] mb-10`}>Empowering Users, Empowering Communities</p>
                </div>
                <div></div>
            </div>
            <div className='w-[50%] h-[200px] bg-[blue] rounded-lg z-10'>
            <iframe 
              src="https://hubbly.me/static/media/HubblyAd.69dce1e3722fd2ca0b66.mp4" // Convert the YouTube watch URL to an embed URL
           
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-[100%] h-[200px] bg-[blue] rounded-lg z-10"
            ></iframe>

            </div>
            <div className='w-full bg-[#048392] mt-[-50px] z-0 flex flex-col items-center text-[#000] pb-10'>
                <div className='mt-[10%] flex flex-col md:flex-row gap-10 justify-between'>
                    <div className='flex items-center '>
                        <div>
                            <Image src={Down} alt='' className='w-[55px] h-[55px]'/>
                        </div>
                        <div className='ml-2'>
                            <h1 className='text-[30px] font-[700] text-[#62C1C5] '><CountUp isCounting end={1.2} duration={3.2} onComplete={onComplete}/>M</h1>
                            <p className={`${rale.className} capitalize text-[14px] mt-[-5px]  font-[600] text-[#62C1C5]`}>Downloads</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <Image src={Star} alt='' className='w-[55px] h-[55px]'/>
                        </div>
                        <div className='ml-2'>
                            <h1 className='text-[30px] font-[700] text-[#62C1C5] '><CountUp isCounting end={4.8} duration={3.2} onComplete={onComplete}/></h1>
                            <p className={`${rale.className} capitalize text-[14px] mt-[-5px]  font-[600] text-[#62C1C5]`}>AVG Ratings</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <Image src={Frame} alt='' className='w-[55px] h-[55px]'/>
                        </div>
                        <div className='ml-2'>
                            <h1 className='text-[30px] font-[700] text-[#62C1C5] '><CountUp isCounting end={93} duration={3.2} onComplete={onComplete}/>k</h1>
                            <p className={`${rale.className} capitalize text-[14px] mt-[-5px]  font-[600] text-[#62C1C5]`}>Reviews</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default About