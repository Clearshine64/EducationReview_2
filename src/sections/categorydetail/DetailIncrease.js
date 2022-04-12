import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Image from "../../components/Image";

DetailIncrease.propTypes = {
  data: PropTypes.object,
}

export default function DetailIncrease({ data }) {
  const { id, banner, } = data;
  return (
    <div className='relative mb-20 py-16'>
      <div className='container max-w-6xl px-5 '>
        <div className='rounded-lg bg-white shadow-lg flex flex-col lg:flex-row items-center gap-5 p-5'>
          <Image src={banner} className="" />
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
            <Link to={`/pricing/${id}`} className='btn text-white'>
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute inset-y-0 left-0 w-full lg:w-1/2 rounded-2xl bg-neutral -z-10' />
    </div>
  )
}