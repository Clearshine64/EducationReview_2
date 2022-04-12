import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DetailFeature, DetailHero, DetailReview, DetailIncrease } from '../sections/categorydetail';

const DETAIL_DATA = {
  id: 12123,
  name: '',
  cover: '/images/category/hero-detail.png',
  banner: '/images/category/banner-detail.png',
  features: [
    {
      title: 'Lorem ipsum dolor',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum 
      efficitur blandit. Aliquam lorem augue, vestibulum at rutrum quis, 
      pharetra nec massa.`
    },
    {
      title: 'Consectetur adipiscing',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum 
      efficitur blandit. Aliquam lorem augue, vestibulum at rutrum quis, 
      pharetra nec massa.`
    },

  ],

}



export default function CategoryDeatil() {


  const [detail, setDetail] = useState();

  const { id } = useParams();

  useEffect(() => {
    setDetail(DETAIL_DATA);
  }, [id])

  return (
    detail &&
    <>

      <DetailHero data={detail} />

      <DetailReview data={detail} />

      <DetailIncrease data={detail} />

      <DetailFeature data={detail} />

    </>
  )
}