
import { Icon } from "@iconify/react";
import { useState,  useEffect } from "react";
import Pagination from "../components/Pagination";

import CompanyCard from "../sections/commons/CompanyCard";
import FilterModal from "../sections/commons/FilterModal";
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

const COMPANIES = [...Array(7)].map((_, index) => ({
  id: 12123 + index,
  brand: `/mock/brand/brand_2.png`,
  description: 'Et nec tantas accusamus salutatus, sit commodo veritus teEt nec tantas accusamus salutatus, sit commodo veritus te Et nec tantas accusamus salutatus, sit commodo veritus te',
  name: 'School',
  rating: [
    { star: 5, review: 50, },
    { star: 4, review: 20, },
    { star: 3, review: 10, },
    { star: 2, review: 4, },
    { star: 1, review: 7, },
  ],

}))

const filterTag = ['All', 'High rated', 'Low rated'];

export default function CompanyList() {
  const [categories, setCategories] = useState([]);
  const [filterModal, setFilterModal] = useState(false);
  const [page, setPage] = useState();

  useEffect(() => {
    setCategories(COMPANIES);
  }, []);

  return (
    categories &&
    <div className="container max-w-6xl">
      
      <p className="text-center text-3xl font-bold pt-20 mb-16">
        <span>{categories.length}</span>
        <span>{' '}result for{' '}</span>
        <span className="">"All category"</span>
      </p>

      <SearchWithCategory
        categories={CATEGORYS}
        categoryId={Number(0)}
        onSearch={(search) => console.log(search)}
      />


      <div className="flex gap-5 justify-between px-5 mb-10 items-center">
        <div className="flex">
          {filterTag.map((item, index) =>
            <p className="text-bold text-gray-500 px-2 border-r-2" key={index}>
              {item}
            </p>
          )}
        </div>
        <button className="btn gap-2 text-white"
          style={{ borderRadius: 8 }}
          onClick={() => setFilterModal(true)}
        >
          <Icon icon={'fa:filter'} width={24} height={24} />
          Filters
        </button>
      </div>

      {/* card list */}

      <div className="flex flex-col  gap-y-8 mb-20 p-5">
        {categories.map((item, index) =>
          <CompanyCard data={item} key={index} />
        )}
      </div>

      {/* pagination section */}

      <div className="mb-20">
        <Pagination
          value={page}
          onChange={(pageNo) => setPage(pageNo)}
          totalNum={categories.length}
        />
      </div>

      {/* filter modal */}

      <FilterModal
        open={filterModal}
        onClose={() => setFilterModal(false)}
        onRatingChange={(e) => { }}
        onCategoryChange={(e) => { }}
        onDistanceChange={(e) => { }}
      />
    </div>
  )
}