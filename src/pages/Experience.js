import { useEffect, useState } from "react";
import { ExperCourses, ExperReviews, ExperSummary } from "../sections/experience";

const EXPERIENCE = {
  name: 'The University of Sydney',
  brandUrl: '/mock/brand/brand_1.png',
  location: 'The University of Sydney NSW 2006, Australia',
  phoneNum: '+61 2 9351 2222',
  email: 'www.sydney.edu.au',

  ratings: [
    { star: 5, review: 50, },
    { star: 4, review: 20, },
    { star: 3, review: 10, },
    { star: 2, review: 4, },
    { star: 1, review: 7, },
  ],

  courses: [...Array(3)].map((_, index) => ({
    id: 238283932,
    cover: `/mock/covers/cover_${index + 1}.jpg`,
    title: ['Pre K', 'K-2', 'University'][index],
    comment: 'Et nec tantas accusamus salutatus, sit commodo   veritus te Et nec tantas accusamus salutatus, sit   commodo veritus te ',
    reviews: 234 + index,
    result: 112,
  })),

  awesome: [...Array(5)].map((_, index) => (
    {
      id: 12123,
      avatarUrl: `/mock/avatar/avatar_${index + 1}.jpg`,
      title: 'Avesome Experience',
      comment: 'Et nec tantas accusamus salutatus, sit commodo veritus te Et nec tantas accusamus salutatus, sit commodo veritus te Et nec tantas accusamus salutatus, sit commodo veritus te Et nec tantas accusamus salutatus, sit commodo veritus te',
      rating: 2,
      name: 'Mark Twain',
      publishAt: '20.08.2022',
      reply: [
        {
          avatarUrl: `/mock/avatar/avatar_${index + 7}.jpg`,
          name: 'Jhon Dai',
          comment: 'Et nec tantas accusamus salutatus, sit commodo veritus te Et nec tantas accusamus salutatus, sit commodo veritus te Et nec tantas accusamus salutatus, sit commodo veritus te',
        }
      ]
    }
  ))


}


export default function Experience() {

  const [experience, setExperience] = useState();

  useEffect(() => {
    setExperience(EXPERIENCE);
  }, []);

  return (
    experience &&
    <>
      <ExperSummary data={experience} />

      <div className="bg-white">
        <ExperCourses data={experience} />

        <ExperReviews data={experience} />
      </div>

    </>
  )
}