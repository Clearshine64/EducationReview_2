
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import ReviewCard from "../sections/commons/ReviewCard";
import SearchWithCategory from "../sections/commons/SearchWithCategory";

const CATEGORYS = [
  {
    id: 10,
    categoryName: 'all category'
  },
  {
    id: 238283932,
    categoryName: 'category1'
  },
  {
    id: 11,
    categoryName: 'category2'
  },
  {
    id: 14,
    categoryName: 'category3'
  },
]

const REVIEWS = [...Array(15)].map((_, index) => ({
  id: 12123 + index,
  avatarUrl: `/mock/avatar/avatar_${index + 1}.jpg`,
  title: 'Avesome Experience',
  comment: 'Et nec tantas accusamus salutatus, sit commodo veritus te',
  rating: 3.6,
  name: 'Mark Twain',
  publishAt: '20.08.2022'
}))

export default function Reviews() {

  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setReviews(REVIEWS);
  }, [id]);


  const handleLoadMore = (item) => {
    setReviews(reviews.concat(reviews));
  }

  return (
    <div className="container max-w-6xl">
      {reviews &&
        <>
          <p className="text-center text-3xl font-bold pt-10 mb-16">
            <span>{reviews.length}</span>
            <span>{' '}result for{' '}</span>
            <span className="">"All category"</span>
          </p>

          <SearchWithCategory
            categories={CATEGORYS}
            categoryId={Number(id)}
            onSearch={(search) => console.log(search)}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mb-20 px-5">
            {reviews.map((item, index) =>
              <ReviewCard review={item} key={index} />
            )}
          </div>

          <div className="flex mb-20">
            <button className="mx-auto btn btn-lg text-white btn-wide shadow-2xl shadow-neutral/40"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          </div>
        </>
      }
    </div>
  )
}