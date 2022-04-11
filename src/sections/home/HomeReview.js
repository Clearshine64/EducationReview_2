import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import ReviewCard from "../commons/ReviewCard";
import Image from "../../components/Image";
import SectionTitle from '../../components/SectionTitle';
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const reviews = [...Array(5)].map((_, index) => ({
  id: 12123,
  avatarUrl: `/mock/avatar/avatar_${index + 1}.jpg`,
  title: 'Avesome Experience',
  comment: 'Et nec tantas accusamus salutatus, sit commodo veritus te',
  rating: 2 + index * 0.5,
  name: 'Mark Twain',
  publishAt: '20.08.2022'
}))

const settingSwiper = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  modules: [Autoplay, Pagination, Navigation],

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  }
}

export default function HomeReview() {
  return (
    <div className='container max-w-6xl py-10 px-5 mb-20'>

      <SectionTitle
        title="Latest Reviews"
        description="Read reviews detailed experiences from people like you"
      />
      <p className="text-right -mt-10 mb-5">
        <Link to="/reviews/all" className="btn btn-link text-neutral gap-2">
          View All
          <Icon icon={'fa6-solid:arrow-right-long'} />
        </Link>
      </p>

      <div className='relative'>
        <Swiper  {...settingSwiper} className="testimonial flex flex-col-reverse gap-2">
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Image src="/images/home/airplaneout.svg" className="w-48 absolute -z-[1] right-0 top-[85%] hidden md:block" />
      </div>
    </div>
  )
}