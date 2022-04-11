import { Outlet } from 'react-router-dom';
import Image from '../components/Image';
import ScrollToTopButton from '../components/ScrollToTopButton';

import Footer from './Footer';
import Header from './Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className=' min-h-screen py-8 overflow-hidden relative  bg-[#f79521] bg-opacity-[0.029] '>
        <Outlet />

        <Image src="/images/home/cup.svg" alt="" className='absolute top-[350px] left-[60px] w-12  -z-10 hidden md:block' />
        <Image src="/images/home/airplane.svg" alt="" className='absolute top-[50px] w-40 right-[100px] -z-10 hidden md:block' />
        <Image src="/images/home/paper.svg" alt="" className='absolute top-[350px] right-[60px] w-12 -z-10 hidden md:block' />
        <Image src="/images/home/airplaneout.svg" className="w-48 absolute -z-10 left-0 top-[1200px] hidden md:block" />
        <Image src="/images/home/airplaneout.svg" className="w-48 absolute -z-10 right-0 top-[1600px] hidden md:block" />
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}