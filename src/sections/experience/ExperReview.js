import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import ExperReviewList from "./ExperReviewList";
import ExperReviewSummary from "./ExperReviewSummary";
import ExperReviewWrite from "./ExperReviewWrite";






export default function ExperReviews({ data }) {

  const [writeReview, setWriteReview] = useState();

  return (

    <div className='container max-w-6xl px-5 mb-20'>

      <SectionTitle title="Reviews" description="Read reviews detailed experiences from people like you" />

      <ExperReviewSummary data={data} onWriteReview={() => setWriteReview(true)} />

      <ExperReviewList data={data} />

      {writeReview &&
        <ExperReviewWrite data={data} />
      }

    </div>
  )
}