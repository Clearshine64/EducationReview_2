import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../../components/Image';

CategoryCard.propTypes = {
  data: PropTypes.object,
  className:PropTypes.string,
}
export default function CategoryCard({ data,className }) {
  const { id, category, cover, comment, review } = data;

  return (
    <div className={`p-2 bg-white rounded-xl ${className}`}>
      <div className='mb-5 relative'>
        <Image src={cover} ratio={2 / 3} className="rounded-xl" />
      </div>
      <div className='p-3'>
        <p className='text-3xl font-bold mb-5'>
          {category}
        </p>
        <p className='text-lg mb-5'>
          {comment}
        </p>
        <Link to={`/reviews/${id}`} className='flex gap-2 text-xl text-neutral items-center'>
          <Icon icon={'mdi:chat'} />
          <p>{review}</p> Reviews
          <Icon icon={'fa6-solid:arrow-right-long'} className="pt-1" />
        </Link>
      </div>
    </div>
  )
}