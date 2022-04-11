import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Image from "../components/Image";

const DETAIL_DATA = {
  id:12123,
  name: '',
  cover: '/images/category/hero-detail.png',
  banner: '/images/category/banner-detail.png',
  features: [
    {
      title: 'Lorem ipsum dolor',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum 
      efficitur blandit. Aliquam lorem augue, vestibulum at rutrum quis, 
      pharetra nec massa.`
    },
    {
      title: 'Consectetur adipiscing',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum 
      efficitur blandit. Aliquam lorem augue, vestibulum at rutrum quis, 
      pharetra nec massa.`
    },

  ],

}

const settingSwiper = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  modules: [Autoplay, Pagination, Navigation],

  breakpoints: {

    768: {
      slidesPerView: 2,
    },

  }
}

export default function CategoryDeatil() {

  const [query, setQuery] = useState();

  const [detail, setDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    setDetail(DETAIL_DATA);
  }, [id])

  const handleInput = (e) => {
    setQuery(e.target.value);
  }
  const handleFetch = () => {
    console.log(query);
  }

  return (
    detail
      ? <>
        {/* hero */}
        <div className='relative mb-20 py-10 '>
          <div className='container  max-w-6xl  px-5 '>
            <div className='grid lg:grid-cols-2 items-center gap-5'>
              <div className='h-full relative flex flex-col   justify-center'>
                <p className='font-bold text-5xl  leading-[4rem] p-8'>
                  The Power of your most passionate  customers
                </p>
                <p className='mb-8 text-xl'>
                  Reviews from pre kindergarten to post adulthood education.
                </p>
              </div>
              <div className=''>
                <Image src={detail.cover} className={'max-w-[80%] max-h-[70vh]'} />
              </div>
            </div>
          </div>
          <img className={'absolute inset-0 -z-50'} src="/images/category/bg-detail.svg" />
        </div>

        {/*  */}
        <div className='container max-w-6xl px-5 mb-20'>
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className='rounded-2xl bg-neutral/10 flex flex-col items-center text-center p-5'>
              <Icon icon={'ion:megaphone-outline'} className="w-14 h-14 text-neutral mb-5" />
              <p className='text-neutral font-bold text-3xl mb-3'>
                30 thousand
              </p>
              <p className='text-xl font-bold'>Reviews seen every month</p>
              <p className='p-3'>
                Over 30 thousand review impressions every month
              </p>
            </div>
            <div className='rounded-2xl bg-neutral/10 flex flex-col items-center text-center p-5'>
              <Icon icon={'ion:flag'} className="w-14 h-14 text-neutral mb-5" />
              <p className='text-neutral font-bold text-3xl mb-3'>
                5 thousand
              </p>
              <p className='text-xl font-bold'>real reviews per month</p>
              <p className='p-3'>
                Over 30 thousand review impressions every month
              </p>
            </div>
            <div className='rounded-2xl bg-neutral/10 flex flex-col items-center text-center p-5'>
              <Icon icon={'ic:outline-rocket'} className="w-14 h-14 text-neutral mb-5" />
              <p className='text-neutral font-bold text-3xl mb-3'>
                1 thousand
              </p>
              <p className='text-xl font-bold'>have a great return</p>
              <p className='p-2'>
                Over 30 thousand review impressions every month
              </p>
            </div>
          </div>
        </div>

        <div className='relative mb-20 py-16'>
          <div className='container max-w-6xl px-5 '>
            <div className='rounded-lg bg-white shadow-lg flex flex-col lg:flex-row items-center gap-5 p-5'>
              <Image src={detail.banner} className=""/>
              <div className=''>
                <p className='text-3xl font-bold mb-3'>
                  Increase conversions with the power of your customers
                </p>
                <p className='mb-5 p-3 '>
                  Mucius doctus constituto pri at, ne cetero postulant pro. At vix utinam corpora, ea
                  oblique moderatius usu. Vix id viris consul honestatis, an constituto deterruisset
                  consectetuer pro.Mucius doctus constituto pri at, ne cetero postulant pro. At
                  vix utina
                </p>
                <Link to={`/pricing/${detail.id}`} className='btn text-white'>
                  View Pricing Plans
                </Link>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 left-0 w-full lg:w-1/2 rounded-2xl bg-neutral -z-10'  />
        </div>

        {/*feature section*/}

        <div className='container max-w-6xl px-5 mb-24'>
          <div className='flex flex-col gap-5 mb-8 justify-center items-center'>
            <p className='text-center font-bold text-4xl'>
              Features
            </p>
            <div className='w-72'>
              <div className='divider text-center before:bg-neutral after:bg-neutral '>
                <img src={'/images/home/divider.svg'} alt="" />
              </div>
            </div>
            <p className='text-center text-xl text-gray-500'>
              Read feature detailed experiences from people like you
            </p>
          </div>
          <div className='relative'>
            <Swiper  {...settingSwiper} className="testimonial flex flex-col-reverse gap-2">
              {detail.features.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='p-8'>
                    <p className='text-2xl font-bold mb-5'>{item.title}</p>
                    <p className=''>{item.content}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </>
      : <></>
  )
}