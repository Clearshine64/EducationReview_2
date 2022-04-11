import PropTypes from 'prop-types';

SectionTitle.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default function SectionTitle({ title, description }) {
  return (
    <div className='flex flex-col gap-5  mb-10 justify-center items-center'>
      <p className='text-center font-bold text-4xl'>
        {title}
      </p>
      <div className='w-72'>
        <div className='divider text-center before:bg-neutral after:bg-neutral '>
          <img src={'/images/home/divider.svg'} alt="" />
        </div>
      </div>
      <p className='text-center text-xl text-gray-500'>
        {description}
      </p>
    </div>
  )
}