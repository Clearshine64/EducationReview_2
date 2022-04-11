import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
LightImageBox.propTypes = {
  items: PropTypes.array,
}

export default function LightImageBox({ items }) {

  const [index, setIndex] = useState(index);
  return (
    <>
      <div className='rounded-lg border p-3 relative'>

      </div>


      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 "
      >
        <div className="opacity-80 fixed inset-0  bg-black" onClick={onClose} />
        <div className=" rounded bg-white z-50 relative">
          <LazyLoadImage
            src={images[photoIndex]} alt="product"
            effect='blur'
            className='max-h-[80vh] max-w-[80vw] rounded '
          />
          <p className='text-center text-black font-bold mb-1'>{photoIndex + 1}{' of '}{images.length} </p>

          <button className='btn btn-ghost btn-circle absolute top-[45%] -left-12'
            onClick={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          >
            <Icon icon={'fa:chevron-left'} className="text-stone-100" width={24} />
          </button>
          <button className='btn btn-ghost btn-circle absolute top-[45%] -right-12'
            onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}
          >
            <Icon icon={'fa:chevron-left'} className="text-stone-100" width={24} rotate={2} />
          </button>
        </div>
      </div>
    </>
  )
}