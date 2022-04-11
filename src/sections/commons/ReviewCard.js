import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';

ReviewCard.propTypes = {
  review: PropTypes.object,
  className:PropTypes.string,
}
export default function ReviewCard({ review,className }) {
  const { id, name, avatarUrl, rating, title, comment, publishAt } = review;
  return (
    <div className={`p-8 border flex flex-col gap-3 border-neutral rounded-2xl bg-white ${className}`}>
      <div className='flex items-center gap-8'>
        <Image src={avatarUrl} className="w-20 h-20 rounded-full border-gray-500" />
        <div className=''>
          <p className='text-xl font-bold'>{name}</p>
          <div className='flex gap-2 items-center'>
            <div className="rating gap-1 rating-sm">
              {[...Array(5)].map((_, index) =>
                <input key={index} type="radio" readOnly
                  className="mask mask-star-2 bg-neutral "
                  checked={Math.floor(rating) === index}
                />
              )}
            </div>
            {`(${rating})`}
          </div>
        </div>
      </div>
      <p className='text-2xl font-bold'>
        {title}
      </p>
      <div className='flex gap-3'>
        <img src="/images/home/quote.svg" alt=""/>
        {comment}
      </div>
      <div className='flex gap-3 items-center'>
        <p className='text-sm'>
          Published: {publishAt}
        </p>
        <Link to={`/experience`}
          className='btn bg-white text-neutral hover:text-white gap-2 ml-auto'>
          Read Review
          <Icon icon={'fa6-solid:arrow-right-long'} />
        </Link>
      </div>
    </div>
  )
}