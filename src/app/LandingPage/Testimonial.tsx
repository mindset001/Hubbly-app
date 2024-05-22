import React from 'react'
import { Raleway } from 'next/font/google'
import Star from '../../../public/assets/star.png'
import Image from 'next/image';

export const rale = Raleway({ subsets: ["latin"] });

function Testimonial() {
  return (
    <main className='w-full flex flex-col items-center my-24'>
        <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-full text-center'>
            <h2 className='text-[35px] font-[700]'>Customer Testimonials</h2>
            <h1 className= {`${rale.className} text-[#048392] font-[700] text-[60px]`}>Why our customers love us</h1>
            <p  className={`${rale.className}`}>Hear from Hubbly users about their positive experiences</p>
        </div>
       
        
        <div className='grid grid-cols-3 gap-2  text-[16px] font-[400] w-[80%] mt-6'>
                            {Navcontent.map((item, i: number) => (
                                <div className='ml-10 mt-4'>
                                    <p className={`${rale.className} test text-[#fff] px-10 `}>{item.talk}</p>
                                    <div className='flex flex-col items-end mt-4'>
                                    <p className='text-[18px] font-[400]'>{item.name}</p>
                                    <Image src={Star} alt='' className='w-[131px] h-[25px]'/>
                                    </div>
                                </div>
                            ))}
                       
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