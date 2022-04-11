import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";
import Image from "../../components/Image";
import Rating from "../../components/Rating";

ExperSummary.propTypes = {
  data: PropTypes.object,
}

export default function ExperSummary({ data }) {
  const { brandUrl, name, location, phoneNum, email, ratings } = data
  return (
    <div className='container max-w-6xl px-5 mb-20'>
      <div className=" flex flex-col md:flex-row gap-10 ">
        <div className="w-52 h-52 rounded-full bg-white flex items-center p-1 justify-center">
          <Image src={brandUrl} className="" />
        </div>
        <div className="">
          <p className="text-3xl font-bold mb-10">
            {name}
          </p>
          <p className="text-gray-500 leading-10 mb-10">
            We've been challenging traditions for almost 170 years Share<br />
            We make lives better by producing leaders of society and equipping our people with leadership qualities so they can serve our comunities at every level
          </p>
          <p className="mb-5 flex items-center gap-2">
            <Icon icon={'fa6-solid:location-dot'} width={24} height={24} />
            <span className="text-gray-500">
              {location}
            </span>
          </p>
          <p className="mb-5 flex items-center gap-2">
            <Icon icon={'fa6-solid:phone'} width={24} height={24} />
            <span className="text-gray-500">
              {phoneNum}
            </span>
          </p>
          <p className="mb-8 flex items-center gap-2">
            <Icon icon={'iconoir:www'} width={24} height={24} />
            <p className="text-blue-500">
              {email}
            </p>
          </p>
          <Rating value={getRatingInfo(ratings).avgRatio} readOnly className="rating-md" />

        </div>
      </div>
    </div>
  )
}

const getRatingInfo = (ratingArr) => {
  let totalReview = 0;
  let totalRating = 0;
  ratingArr.forEach(item => {
    totalReview += item.review;
    totalRating += item.review * item.star;
  });
  const avgRatio = Math.floor(totalRating / totalReview * 10) / 10;
  return ({ totalReview, avgRatio })
}