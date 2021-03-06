import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Image from "../../components/Image";

export default function HomeEducation() {
  return (
    <div className='container max-w-6xl  px-5 mb-20'>
      <div className='grid md:grid-cols-2 gap-x-8 gap-y-12'>
        <div className='relative  px-8'>
          <Image src="/images/home/education.png" className=" w-[90%]" />
          <div className='absolute rounded-full flex px-3 py-1 items-center top-1/3 left-0 bg-white gap-2 border-0'>
            <div className='flex bg-neutral rounded-full text-white p-2'>
              <Icon icon={'carbon:security'} width={24} className="m-auto" />
            </div>
            Safe & Secured
          </div>
          <div className='absolute rounded-full flex px-2.5 py-1 items-center top-1/2 right-0 bg-white gap-2 border-0'>
            <div className='flex bg-indigo-500 rounded-full text-white p-2'>
              <Icon icon={'carbon:security'} width={22} className="m-auto" />
            </div>
            Safe & Secured
          </div>
          <div className='absolute rounded-full flex px-3.5 py-1.5 items-center  -bottom-6 bg-white gap-2 border-0'>
            <div className='flex bg-blue-500 rounded-full text-white p-2'>
              <Icon icon={'carbon:security'} width={28} className="m-auto" />
            </div>
            Safe & Secured
          </div>
          <div className='absolute bottom-0 h-4/5 w-[90%] -z-[1] rounded-lg bg-neutral shadow-2xl shadow-neutral/40' />
        </div>

        <div className='flex flex-col gap-8 justify-center h-full text-center'>
          <p className='text-4xl font-bold'>
            Education Starts Here
          </p>
          <p className='leading-10'>
            One of the most important choices in your life is choosing the right school for your
            child, the right university, college or online course. By using our platform, you’ll have
            access to thousands of choices suited for you. Don’t leave it to chance or relyi
          </p>
          <Link to="/reviews/10" className='btn btn-lg mx-auto gap-2 text-white  px-5 shadow-2xl shadow-neutral/40'>
            <Icon icon={'fa:search'} />
            Search Reviews
          </Link>
        </div>
      </div>
    </div>
  )
}