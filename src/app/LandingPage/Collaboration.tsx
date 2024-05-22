import React from 'react'
import Image from 'next/image';
import { Raleway } from 'next/font/google';
import Collab from '../../../public/assets/collab.png'
import Where from '../../../public/assets/where.png'

export const rale = Raleway({ subsets: ["latin"] });

function Collaboration() {
    return (
        <main className='w-full flex flex-col items-center justify-center my-10'>
            <div className='w-full flex flex-col items-center'>
                <div className='w-[80%] flex items-center justify-between'>
                    <div>
                        <h2 className='text-[35px] font-[700]'>Where you are</h2>
                        <h1 className={`${rale.className} text-[#048392] font-[700] text-[60px]`}>convenient <br /> communication</h1>
                        <p className={`${rale.className}  font-[500] text-[16px]`}>Chat or Talk with Us on Your Favourite Messenger Platforms.</p>
                    </div>
                    <div>
                        <Image src={Where} alt='' className='w-[466px] h-[448px]' />
                    </div>
                </div>
                <div className='bg-[#04839226] w-full flex flex-col items-center justify-between py-10'>
                    <div className='w-[80%] flex items-center justify-between'>
                    <div>
                        <Image src={Collab} alt='' className='w-[515px] h-[465px]' />
                    </div>
                    <div>
                        <h2 className='text-[35px] font-[700]'>our collaborations</h2>
                        <h1 className={`${rale.className} text-[#048392] font-[700] text-[60px] capitalize leading-[68.68px]`}>join hubbly and <br />  partners on our <br /> journey towards <br /> a better future.</h1>
                        <div className={`${rale.className} mt-6 pl-6 flex justify-between h-[52px] border rounded-[35px] border-[#979797]`}>
                            <input type="text" placeholder='Enter Your Email Address' className='bg-transparent border-none'/>
                            <button className='bg-[#048392] rounded-[35px] text-[#fff] h-[52px] w-[104px]'>Join us</button>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Collaboration