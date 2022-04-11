import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [query, setQuery] = useState();

  const handleInput = (event) => {
    setQuery(event.target.value);
  }
  const handleFetch = () => {
    console.log(query);
  }
  return (
    <>
      {/* search section */}
      <div className='container max-w-6xl px-5 lg:px-0  mb-20 '>
        <div className="relative shadow-2xl bg-neutral rounded-xl shadow-neutral/40">
          <div className=' min-h-[250px] p-5 lg:px-10 items-center justify-center flex flex-col gap-5 lg:flex-row'>
            <p className='text-2xl lg:text-3xl text-white text-center leading-10 lg:min-w-[25rem]'>
              Subscribe our Newsletter &<br />
              Get every updates.
            </p>

            <div className=' flex justify-between items-center w-full bg-white pr-2 rounded-full '>
              <input className='input input-lg w-full ' placeholder='looking For....' onChange={handleInput} />
              <button className='btn gap-2 text-white btn-circle lg:min-w-max lg:px-3'
                onClick={handleFetch}
              >
                <Icon icon={'fa:search'} className="text-lg uppercase" />
                <span className='hidden lg:block'>subscribe now</span>
              </button>
            </div>
          </div>
          <Icon icon={'bi:circle-fill'} className="absolute w-24 h-24 text-white/5 top-5 left-3" />
          <Icon icon={'bi:circle-fill'} className="absolute w-52 h-52 text-white/5 top-4 left-40" />
          <Icon icon={'bi:circle-fill'} className="absolute w-24 h-24 text-white/5 top-16 left-96" />
          <Icon icon={'bi:circle-fill'} className="absolute w-16 h-16 text-white/5 bottom-40 right-5" />
          <Icon icon={'bi:circle-fill'} className="absolute w-28 h-28 text-white/5 bottom-5 right-10" />
        </div>
      </div>
      <div className='container max-w-6xl py-10 px-5'>
        <div className="flex flex-col lg:flex-row  gap-8 justify-center ">
          <div className='grow  flex flex-col gap-5 items-center lg:items-start text-center lg:text-left'>
            <Link to="/">
              <img src='/logo512.png' className='h-20' alt='logo' />
            </Link>
            <p className=''>
              Lorem ipsum dolor sit amet, consetetur
              sadip scing elitr, sed di nonumy eirmod
              temporinvi dunt ut labore.
            </p>
            <div className='flex  gap-5'>
              <button className='btn bg-neutral/40 btn-circle text-neutral border-0 hover:text-white'>
                <Icon icon={'fa:facebook'} width={24} height={24} />
              </button>
              <button className='btn bg-neutral/40 btn-circle text-neutral border-0 hover:text-white'>
                <Icon icon={'dashicons:video-alt3'} width={24} height={24} />
              </button>
              <button className='btn bg-neutral/40 btn-circle text-neutral border-0 hover:text-white'>
                <Icon icon={'dashicons:video-alt3'} width={24} height={24} />
              </button>
            </div>
          </div>
          <div className='flex flex-col gap-3 min-w-[150px] text-center lg:text-left'>
            <p className='text-xl font-bold mb-1'>Links</p>
            <Link className='text-gray-500' to="">About Us</Link>
            <Link className='text-gray-500' to="">Partners</Link>
            <Link className='text-gray-500' to="">FAQ's</Link>
            <Link className='text-gray-500' to="">Sign up</Link>
            <Link className='text-gray-500' to="">Contacts</Link>
          </div>
          <div className=' flex flex-col gap-3 min-w-[150px] text-center lg:text-left'>
            <p className='text-xl font-bold mb-1'>Categories</p>
            <Link className='text-gray-500' to="">Pre K</Link>
            <Link className='text-gray-500' to="">K-12</Link>
            <Link className='text-gray-500' to="">University</Link>
            <Link className='text-gray-500' to="">Tafe</Link>
            <Link className='text-gray-500' to="">Private</Link>
            <Link className='text-gray-500' to="">Alternative</Link>
          </div>
          <div className=' grow  flex flex-col gap-5 '>
            <p className='text-xl font-bold mb-1 text-center lg:text-left'>Disclaimer</p>
            <div className='flex gap-2 '>
              <div className=''>
                <Icon icon={'eva:home-outline'} width={24} height={24} className={'text-neutral '} />
              </div>
              <span>
                Education Reviewed is here to provide unbasied information and experiences on education providers
              </span>
            </div>
            <div className='flex  gap-2'>
              <Icon icon={'eva:email-outline'} width={24} height={24} className={'text-neutral'} />
              <Link className='text-gray-500' to="">info@educationreviewed.au</Link>
            </div>

          </div>
        </div>
      </div>
      <div className='bg-neutral h-24 flex items-center justify-center'>
        <p className='text-white font-bold text-lg text-center'>
          Terms and conditions     |   Privacy
        </p>
      </div>
    </>
  )
}