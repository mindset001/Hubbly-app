import React from 'react'
import Image from 'next/image';
import { Raleway } from 'next/font/google';
import Collab from '../../../public/assets/long.png'
import Where from '../../../public/assets/people.png'

import Circle from '../../../public/assets/Ellipse 109.png'

export const rale = Raleway({ subsets: ["latin"] });

function Profession() {
    return (
        <main className='w-full flex flex-col items-center justify-center my-10'>
            <div className='w-full flex flex-col items-center'>
                
                <div className=' w-full flex flex-col items-center justify-between py-10 my-10'>
                    <div className='w-[85%] flex items-center justify-between'>
                        <div className='w-[50%]'>
                            <Image src={Collab} alt='' className='w-[535px] h-[727px]' />
                        </div>
                        <div className='w-[50%]'>
                            <h2 className='text-[35px] font-[700]'>How Hubby Works</h2>
                            <h1 className={`${rale.className} text-[#048392] font-[700] text-[60px] capitalize leading-[68.68px]`}>This app is <br /> working <span className='font-[400]'>by <br />
                                some steps!</span></h1>
                            <div className=' text-[16px] font-[400] w-[80%] mt-6'>
                                {Navcontent.map((item, i: number) => (
                                    <div className=' flex items-center'>
                                        <div>
                                            <h1 className='font-[700] text-[75px] text-[#04839226] mr-[-20px]'>{item.id}</h1>
                                        </div>
                                        <div className='bg-[#fff] shadow-lg items-center px-4 flex flex-row justify-between w-full h-[100px]'>
                                            <div className='w-45%'>
                                                <Image src={Circle} alt='' className='w-[57px] h-[57px]'/>
                                            </div>
                                            <div className='w-[75%]'>
                                                <p className='text-[18px] font-[700]'>{item.name}</p>
                                                <p className={`${rale.className}text-[#fff] text-[14px]`}>{item.talk}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>

                </div>
                <div className='w-[80%] flex items-center justify-between'>
                    <div className='w-[50%]'>
                        <h2 className='text-[35px] font-[700]'>Proffessionalism</h2>
                        <h1 className={`${rale.className} text-[#048392] font-[700] text-[60px] capitalize leading-[68.68px]`}>trusted <br /> professionals at <br /> your doorstep</h1>
                        <p className={`${rale.className}  font-[500] text-[16px]`}>We carefully vet all our Hubbly professionals to ensure they meet our high standards of quality and reliability. Rest assured that you'll receive top-notch service every time.</p>
                    </div>
                    <div className='w-[45%]'>
                        <Image src={Where} alt='' className='w-[466px] h-[448px]' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profession

const Navcontent = [
    {
        id: 1,
        name: 'Download app for free',
        talk: 'Download mobile app play store/app store & Sign Up. '
    },
    {
        id: 2,
        name: 'Find a Service',
        talk: 'Navigate through the available service that meets your needs.'
    },
    {
        id: 3,
        name: 'Booking',
        talk: 'Streamline your bookings & proceed to payments. Enjoy quality services.'
    },



]