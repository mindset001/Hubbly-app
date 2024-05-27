import { Raleway } from 'next/font/google';
import React from 'react'
import Two from '../../../public/assets/two.png'
import Image from 'next/image';


export const rale = Raleway({ subsets: ["latin"] });
function Download() {
  return (
    <main>
        <div className='w-full bg-[#04839226] flex flex-col items-center justify-between py-10'>
                    <div className='w-[80%] flex flex-col-reverse lg:flex-row items-center justify-between'>
                        <div className='w-full lg:w-[45%]'>
                            <h2 className='text-[35px] font-[700] text-center lg:text-left'>App Dowload</h2>
                            <h1 className={`${rale.className} text-[#048392] font-[700] text-center lg:text-left text-[35px] md:text-[50px] lg:text-[60px] capitalize`}>This app is <br className='hidden lg:block'/> available <span className='font-[400]'>for <br className='hidden lg:block'/>
                                your smart phone</span></h1>
                            <p className={`${rale.className}  font-[500] text-[16px]`}>Experience the convenience and quality of Hubbly's household services for yourself. Sign up now to browse our selection of services and book your first appointment. With Hubbly, taking care of your home has never been easier.</p>
                            <div>
                                <button></button>
                                <button></button>
                            </div>
                        </div>
                        <div>
                            <Image src={Two} alt='' className='w-[466px] h-[448px]' />
                        </div>
                    </div>
                </div>
    </main>
  )
}

export default Download