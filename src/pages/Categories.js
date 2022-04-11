
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";
import Dialog from "../components/Dialog";
import DropdownMenu from "../components/DropdownMenu";
import Pagination from "../components/Pagination";

import CompanyCard from "../sections/commons/CompanyCard";

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

const MOCK_FILTER = {
  rating: [
    {
      tag: 'Superb 9+',
      value: 67
    },
    {
      tag: 'Very Good 8+',
      value: 89
    },
    {
      tag: 'Good 7+',
      value: 45
    },
    {
      tag: 'Pleasant 6+',
      value: 78
    }
  ],
  categories: [
    {
      tag: 'Restaurants',
      value: 12,
    },
    {
      tag: 'Clotges',
      value: 11,
    },
    {
      tag: 'Bars',
      value: 23,
    },
    {
      tag: 'Events',
      value: 56,
    },
  ],

}

const filterTag = ['All', 'High rated', 'Low rated'];

export default function CompanyList() {
  const [selectedCategory, setSelectedCategory] = useState({ id: 10, categoryName: 'All category' });
  const [categories, setCategories] = useState([]);
  const [filterModal, setFilterModal] = useState(false);
  const [page, setPage] = useState();

  const queryRef = useRef();
  // const { categoryId } = useParams();

  useEffect(() => {
    setCategories(COMPANIES);
    const selectedCat = CATEGORYS.find(item => item.id.toString() === queryRef.current);
    setSelectedCategory(selectedCat)
  }, []);

  const handleCategory = (item) => {
    setSelectedCategory(item)
  }


  return (
    <div className="container max-w-6xl">
      {categories &&
        <>
          <p className="text-center text-3xl font-bold pt-20 mb-16">
            <span>{categories.length}</span>
            <span>{' '}result for{' '}</span>
            <span className="">"{selectedCategory?.categoryName}"</span>
          </p>

          {/* search section */}

          <div className="flex gap-2 mb-40 px-16">
            <input className='input input-lg grow shadow-2xl shadow-neutral/40 '
              placeholder='What are you looking For....' ref={queryRef}
            />
            <DropdownMenu
              className="rounded-full input-lg shadow-2xl shadow-neutral/40 min-w-[240px]"
              summary={selectedCategory?.categoryName}
            >
              <div className="shadow bg-base-100 rounded p-2 mt-2 min-w-max ">
                {categories.map((item, index) =>
                  <div className="rounded-lg hover:bg-neutral/50 px-3  w-full py-1 mb-2 cursor-pointer"
                    key={index}
                    onClick={() => handleCategory(item)}>
                    {item.categoryName}
                  </div>
                )}
              </div>
            </DropdownMenu>
            <button className='btn gap-2 btn-lg text-white shadow-2xl shadow-neutral/40  ml-5'>
              <Icon icon={'fa:search'} className="text-lg" />
              Search
            </button>
          </div>


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
        </>
      }
      {/* filter modal */}
      <Dialog className="rounded-2xl bg-white p-5 md:p-10 max-w-6xl w-full"
        open={filterModal}
        onClose={() => setFilterModal(false)}
      >
        <div className="grid grid-cols-4 gap-5 ">
          <div className="">
            <p className="font-bold text-lg mb-5">Rating</p>
            {
              MOCK_FILTER.rating.map((item, index) =>
                <div className="flex justify-between gap-2 items-center mb-5" key={index}>
                  <input className="checkbox border checkbox-accent " type="checkbox" />
                  <p className="">{item.tag}</p>
                  <p className="ml-auto">{item.value}</p>
                </div>
              )
            }
          </div>

          <div className="">
            <p className="font-bold text-lg mb-5">Categories</p>
            {
              MOCK_FILTER.categories.map((item, index) =>
                <div className="flex justify-between gap-2 items-center mb-5" key={index}>
                  <input className="checkbox border checkbox-accent" type="checkbox" />
                  <p className="">{item.tag}</p>
                  <p className="ml-auto">{item.value}</p>
                </div>
              )
            }
          </div>
          <div className="col-span-2 ">
            <p className="font-bold text-lg mb-5">Categories</p>
            <p className="mb-5">Radius around selected destination 30 km</p>
            <input className="range range-sm range-accent" type="range" />
          </div>
        </div>


      </Dialog>
    </div>
  )
}