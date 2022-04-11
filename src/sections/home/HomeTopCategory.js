import SectionTitle from "../../components/SectionTitle";
import CategoryCard from "../commons/CategoryCard";

const topCategories = [...Array(6)].map((_, index) => ({
  id: 238283932,
  cover: `/mock/covers/cover_${index + 1}.jpg`,
  category: 'category',
  comment: 'Et nec tantas accusamus salutatus, sit commodo   veritus te Et nec tantas accusamus salutatus, sit   commodo veritus te ',
  review: 545
}))

export default function HomeTopCategory() {
  return (
    <div className='container max-w-6xl px-5 mb-20'>
      <SectionTitle title="Top Categories" description="Targeted categories to read reviews about" />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8'>
        {topCategories.map((item, index) =>
          <CategoryCard data={item} key={index} />)}
      </div>
    </div>
  )
}