import PropTypes from 'prop-types';
import Image from '../../components/Image';

DetailHero.propTypes = {
  data: PropTypes.object,
}

export default function DetailHero({ data }) {

  const { cover } = data;

  return (
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
            <Image src={cover} className={'max-w-[80%] max-h-[70vh]'} />
          </div>
        </div>
      </div>
      <img className={'absolute inset-0 -z-50'} src="/images/category/bg-detail.svg" />
    </div>
  )
}