import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";
import Image from "../../components/Image";
import Rating from "../../components/Rating";


AwesomeCard.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
}

export default function AwesomeCard({ data, className }) {
  const { avatarUrl, name, rating, comment, reply } = data;
  return (
    <div className={`border border-neutral rounded-box p-5 flex flex-col md:flex-row ${className}`}>
      <div className="p-5">
        <Image src={avatarUrl} className="w-20 h-20 rounded-full" />
      </div>
      <div className='w-full'>
        <div className="mb-8">
          <p className="text-2xl font-bold mb-5">
            {name}
          </p>
          <Rating value={rating} readOnly />
          <p className="text-2xl font-bold mb-5">
            Awesome experience
          </p>
          <div className='flex gap-3'>
            <img src="/images/home/quote.svg" alt="" />
            {comment}
          </div>
        </div>
        <div className="flex gap-5 flex-col md:flex-row justify-between  mb-8">
          <div className='flex gap-3 justify-center'>
            <button className="btn btn-ghost gap-2 bg-gray-200 w-36" style={{ borderRadius: 8 }}>
              <Icon icon={'fa:thumbs-up'} />
              Useful
            </button>
            <button className="btn btn-ghost gap-2 bg-gray-200 w-36" style={{ borderRadius: 8 }}>
              <Icon icon={'fa:thumbs-down'} />
              Not Useful
            </button>
          </div>
          <div className='flex gap-2 items-center '>
            <div className="ml-auto md:clear-none">
              share
            </div>
            <button className="btn btn-ghost btn-circle">
              <Icon icon="fa:facebook" width={24} height={24} />
            </button>
            <button className="btn btn-ghost btn-circle">
              <Icon icon="fa:google-plus" width={26} height={26} />
            </button>
            <button className="btn btn-ghost btn-circle">
              <Icon icon="fa:twitter" width={24} height={24} />
            </button>
          </div>
        </div>
        {
          (reply || []).map((item, index) =>

            <div className="flex flex-col md:flex-row" key={index}>
              <div className="p-5 ml-auto md:ml-0">
                <Image src={item.avatarUrl} className="w-20 h-20 rounded-full" />
              </div>
              <div className="">
                <p className="text-2xl font-bold mb-5">
                  <span >Reply from {''}</span>
                  <span>{item.name}</span>
                </p>
                <p className="text-gray-500 mb-5 leading-10">
                  {item.comment}
                </p>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}