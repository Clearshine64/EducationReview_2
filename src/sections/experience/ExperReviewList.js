import { Icon } from "@iconify/react";
import { useState } from "react";
import Pagination from "../../components/Pagination";
import AwesomeCard from "../commons/AwesomeCard";
import FilterModal from "../commons/FilterModal";



export default function ExperReviewDetail({ data }) {

  const [filterModal, setFilterModal] = useState();

  const [page, setPage] = useState();

  const { awesome } = data;
  return (
    <>
      <div className="flex flex-col gap-5 px-5 mb-20">
        <button className="btn ml-auto gap-2 text-white"
          style={{ borderRadius: 8 }}
          onClick={() => setFilterModal(true)}
        >
          <Icon icon={'fa:filter'} width={24} height={24} />
          Filters
        </button>
        {awesome.map((item, index) =>
          <AwesomeCard key={index} data={item} />
        )}
      </div>

      {/* pagination section */}

      <div className="mb-20">
        <Pagination
          value={page}
          onChange={(pageNo) => setPage(pageNo)}
          totalNum={awesome.length}
        />
      </div>

        <FilterModal
          open={filterModal}
          onClose={() => setFilterModal(false)}
          onRatingChange={(e) => { }}
          onCategoryChange={(e) => { }}
          onDistanceChange={(e) => { }}
        />
    </>
  )
}