import PropTypes from 'prop-types';
import CourseCard from '../commons/CourseCard';

ExperCourses.propTypes = {
  data: PropTypes.object,
}

export default function ExperCourses({ data }) {
  const { courses } = data;

  return (
    <div className='container max-w-6xl  px-5 mb-20'>
      <div className='flex flex-col gap-5  mb-8 justify-center items-center'>
        <p className='text-center font-bold text-4xl'>
          Courses
        </p>
        <div className='w-72'>
          <div className='divider text-center before:bg-neutral after:bg-neutral '>
            <img src={'/images/home/divider.svg'} alt="" />
          </div>
        </div>
        <p className='text-center text-xl text-gray-500'>
          Targeted categories to read reviews about
        </p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-6'>
        {courses.map((item, index) =>
          <CourseCard data={item} key={index} />
        )}
      </div>
    </div>
  )
}