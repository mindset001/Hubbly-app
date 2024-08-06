'use client'
import React, { useState } from 'react';
import Man from '../../../public/assets/man.png';
import Image from 'next/image';
import Men from '../../../public/assets/Menu@2x.png';
import Logo from '../../../public/assets/logo.png';
import { Raleway } from 'next/font/google';
// import Link from 'next/link';
import { Link } from 'react-scroll';

const rale = Raleway({ subsets: ["latin"] });

function NewHero() {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);

  const handleShow = () => {
    setHide(true);
    setShow(false);
  };

  const handleHide = () => {
    setShow(true);
    setHide(false);
  };

  return (
    <main className='hero w-full flex flex-col items-center text-[#fff]'>
      <div className='w-[80%]'>
        <div className='flex justify-between items-center mb-10 mt-6'>
          <Image src={Logo} alt='' className='h-[45px] w-[144px]' />
          <div className='block lg:hidden'>
            {show && <div onClick={handleShow}>
              <Image src={Men} alt=''/>
            </div>}
            {hide && 
              <div onClick={handleHide}>
                <p className={`${rale.className} text-[80px] font-[700] mt-[-40px]`}>x</p>
              </div>}
          </div>
          <div className='hidden lg:flex justify-between text-[#fff]'>
            <ul className='flex flex-row gap-3 text-[14px] font-[700]'>
              {Navcontent.map((item, i) => (
                <li key={i} className={`${rale.className}`}>
                  <Link to={item.link} smooth={true} duration={500} offset={-70} className='cursor-pointer'>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {hide && 
          <div className='bg-white p-6 absolute right-2 top-12 block lg:hidden mt-6'>
            <ul className='flex flex-col gap-3 text-[#000] text-[16px] font-[700]'>
              {Navcontent.map((item, i) => (
                <li key={i} className={`${rale.className}`}>
                  <Link to={item.link} smooth={true} duration={500} offset={-70} onClick={handleHide} className='cursor-pointer'>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        }
        <div className='flex flex-col lg:flex-row justify-between mt-10'>
          <div>
            <p className={`${rale.className} text-[16px]`}>Eco-Friendly Solutions at Your Fingertips</p>
            <h1 className='font-[700] text-[35px] md:text-[50px] lg:text-[60px]'>
              All Your Home <br />
              Needs in <span className='text-[#70F9FF]'>One Place</span>
            </h1>
            <h2 className={`${rale.className} text-[#fff] text-[20px] md:text-[36px] font-[800]`}>Green and Convenient</h2>
            <button className={`${rale.className} mt-4 bg-[#EFAC2B] shadow-lg rounded-[88px] h-[39px] w-[204px] text-[16px]`}>
              Join The Community {'>'}
            </button>
          </div>
          <Image src={Man} alt='' className='mt-10 lg:mt-0 lg:w-[422px] lg:h-[422px]' />
        </div>
      </div>
    </main>
  );
}

export default NewHero;

const Navcontent = [
  {
    link: 'about',
    name: 'About Us'
  },
  {
    link: 'choose',
    name: 'Why Choose Hubbly'
  },
  {
    link: 'how-we-work',
    name: 'How Hubbly Works'
  },
  {
    link: 'offerings',
    name: 'Our Offerings'
  },
];
