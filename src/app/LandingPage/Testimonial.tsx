'use client'
import React from 'react'
import { Raleway } from 'next/font/google'
import Star from '../../../public/assets/star.png'
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const rale = Raleway({ subsets: ["latin"] });

function Testimonial() {
    const items = Navcontent.map((item, i: number) => (
        <div className='ml-10 mt-4 w-[277.35px]'>
            <p className={`${rale.className} test text-[#fff] px-10 `}>{item.talk}</p>
            <div className='flex flex-col items-end mt-4'>
                <p className='text-[18px] font-[400]'>{item.name}</p>
                <Image src={Star} alt='' className='w-[131px] h-[25px]' />
            </div>
        </div>
    ))
    return (
        <main className='w-full flex flex-col items-center my-24'>
            <div className='w-full flex flex-col items-center justify-center'>
                <div className='w-full text-center'>
                    <h2 className='text-[20px] md:text-[35px] font-[700]'>Customer Testimonials</h2>
                    <h1 className={`${rale.className} text-[#048392] font-[700] text-[35px] md:text-[50px] lg:text-[60px]`}>Why our customers love us</h1>
                    <p className={`${rale.className}`}>Hear from Hubbly users about their positive experiences</p>
                </div>


                <div className=' text-[16px] font-[400] w-full items-center lg:w-[80%] mt-6'>
                <AliceCarousel 
            mouseTracking 
            items={items} 
            responsive={{
              0: { items: 1 },
              568: { items: 2 },
              1024: { items: 3 },
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

export default Testimonial


const Navcontent = [
    {

        name: 'James, London',
        talk: 'My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!"'
    },
    {
        name: 'James, London',
        talk: 'My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!"'
    },
    {
        name: 'James, London',
        talk: 'My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!"'
    },
    {
        name: 'James, London',
        talk: 'My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!"'
    },
    {
        name: 'James, London',
        talk: 'My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!"'
    },
    {
        name: 'James, London',
        talk: 'My Hubbly experience was fantastic. Dish cleaning has never been easier and flexible!"'
    },


]