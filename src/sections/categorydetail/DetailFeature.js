import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper';
import SectionTitle from "../../components/SectionTitle";


DetailFeature.propTypes = {
  data: PropTypes.object,
}

export default function DetailFeature({ data }) {
  const { features } = data;
  return (
    <div className='container max-w-6xl px-5 mb-24'>
      <SectionTitle
        title="Features"
        description='Read feature detailed experiences from people like you'
      />

      <div className='relative'>
        <Swiper  {...settingSwiper} className="testimonial flex flex-col-reverse gap-2">
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='p-8'>
                <p className='text-2xl font-bold mb-5'>{item.title}</p>
                <p className=''>{item.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

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

    768: {
      slidesPerView: 2,
    },

  }
}