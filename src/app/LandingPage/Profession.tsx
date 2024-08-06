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
                    <div className='w-full lg:w-[85%] flex flex-col lg:flex-row items-center justify-between'>
                        <div className='w-[50%]'>
                            <Image src={Collab} alt='' className='lg:w-[535px] lg:h-[727px]' />
                        </div>
                        <div className='flex flex-col items-center w-full lg:w-[50%]'>
                            <h2 className='text-[35px] font-[700] text-center lg:text-left'>How Hubby Works</h2>
                            <h1 className={`${rale.className} text-[#048392] font-[700] text-center lg:text-left text-[35px] md:text-[50px] lg:text-[60px] capitalize lg:leading-[68.68px]`}>Hubbly works<br className='hidden lg:block'/> in 3 <span className='font-[400]'>simple <br className='hidden lg:block'/>
                            steps!</span></h1>
                            <div className=' text-[16px] font-[400] w-[90%] lg:w-[80%] mt-6'>
                                {Navcontent.map((item, i: number) => (
                                    <div className=' flex items-center'>
                                        <div>
                                            <h1 className='font-[700] text-[75px] text-[#04839226] mr-[-20px]'>{item.id}</h1>
                                        </div>
                                        <div className='bg-[#fff] shadow-lg items-center px-4 flex flex-row justify-between w-full h-[100px]'>
                                            <div className='w-45%'>
                                                <Image src={Circle} alt='' className='w-[57px] h-[57px]'/>
                                            </div>
                                            <div className='w-full lg:w-[75%]'>
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
                <div className='w-full md:w-[80%] flex flex-col lg:flex-row items-center justify-between'>
                    <div className='w-[90%]  lg:w-[50%]  flex flex-col'>
                        <h2 className='text-[35px] font-[700] text-center lg:text-left'>Proffessionalism</h2>
                        <h1 className={`${rale.className} text-[#048392] font-[700] text-center lg:text-left text-[35px] md:text-[50px] lg:text-[60px] capitalize lg:leading-[68.68px]`}>trusted <br className='hidden lg:block'/> professionals at <br  className='hidden lg:block'/> your doorstep</h1>
                        <p className={`${rale.className}  font-[500] text-[16px] text-center lg:text-left`}>We carefully vet all our Hubbly professionals to ensure they meet our high standards of quality and reliability. Rest assured that you'll receive top-notch service every time.</p>
                    </div>
                    <div className='w-[45%] flex items-center'>
                        <Image src={Where} alt='' className='mt-10 lg:mt-0 lg:w-[466px] lg:h-[448px]' />
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