'use client'
import { Raleway } from 'next/font/google';
import Image from 'next/image';
import One from '../../../public/assets/Frame 413.png'
import Two from '../../../public/assets/Frame 414.png'
import Three from '../../../public/assets/Frame 415.png'
import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const rale = Raleway({ subsets: ["latin"] });
function Offerings() {
    const items =  Navcontent.map((item, i: number) => (
                       
        <div className='flex flex-col items-center mt-4'>
        <Image src={item.img} alt='' className='w-[164px] h-[164px]' />
            <p className='text-[12px] md:text-[18px] font-[700] mt-2'>{item.name}</p>
           
        </div>

))
  return (
    <main className='w-full flex flex-col items-center my-10'>
        <div className='w-[80%] flex flex-col items-center'>
        <div className='text-center'>
                <h2 className='text-[35px] font-[700] text-[#000]'>Our Offerings</h2>
                <h1 className={`${rale.className} capitalize text-[35px] md:text-[60px] font-[700]  mb-2 text-[#048392]`}>one stop home service</h1>
                <p className={`${rale.className} text-[18px] font-[500] text-[#000] px-4`}>Our team of experts is committed to delivering excellence 
                Our team of experts is committed to delivering excellence in every service we offer. Whether you need help with house cleaning, dog walking, or in-house cooking, you can trust Hubbly to provide reliable and eco-friendly solutions tailored to your needs.</p>
            </div>

            <div className=' text-[16px] font-[400] w-[80%] mt-6'>
            <AliceCarousel 
            mouseTracking 
            items={items} 
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 4 },
            }}
            autoPlay={true}
            autoPlayInterval={3000}
            infinite={true}
            disableButtonsControls={true}
            disableDotsControls={true}
          />

                </div>
        </div>
    </main>
  )
}

export default Offerings

const Navcontent = [
    {
        img: One,
        name: 'House Cleaning',
    },
    {
        img: Two,
        name: 'Dog Walking',
    },
    {
        img: Three,
        name: 'In-house cooking',
    },
    {
        img: Three,
        name: 'Dish Cleaning',
    },
    {
        img: One,
        name: 'Hair Making',
    },
    {
        img: Two,
        name: 'Plumbing',
    },
    {
        img: Three,
        name: 'Laundary',
    },
    {
        img: Three,
        name: 'Dog Sitting',
    },
    {
        img: One,
        name: 'Ironing Clothes',
    },
    {
        img: Two,
        name: 'Electrical Services',
    },
    {
        img: Three,
        name: 'Shopping / Errand',
    },
    {
        img: Three,
        name: 'House Painting',
    },
    

]