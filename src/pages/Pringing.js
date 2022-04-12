import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import SectionTitle from "../components/SectionTitle";
import PricingCard from "../sections/commons/PricingCard"

const PRICINGS = [
  {
    id: 1212,
    topic: 'Professional',
    price: '$79/mo',
    description: `Mucius doctus constituto pri at, ne cetero postulant     pro. At vix utinam corpora, ea oblique     moderatius usu. `,
  },
  {
    id: 1231,
    topic: 'Professional',
    price: '$79/mo',
    description: `Mucius doctus constituto pri at, ne cetero postulant     pro. At vix utinam corpora, ea oblique     moderatius usu. `,
  },
  {
    id: 12313,
    topic: 'Professional',
    price: '$79/mo',
    description: `Mucius doctus constituto pri at, ne cetero postulant     pro. At vix utinam corpora, ea oblique     moderatius usu. `,
  },
]

export default function Pricing() {
  const { id } = useParams();
  const [pricings, setPricings] = useState();
  const [active, setActive] = useState();

  useEffect(() => {
    setPricings(PRICINGS)
  }, [id])
  return (

    <div className="container max-w-6xl px-5 py-10">
      
      <p className="text-4xl font-bold text-center mb-20">
        Pricing Plans
      </p>


      <SectionTitle
        title="Choose your Plan"
        description="Save 20% with annual billing"
      />

      <div className="flex gap-5 justify-center mb-20">
        <button className="btn text-white shadow-2xl shadow-neutral">
          Annual Discount
        </button>
        <button className="btn bg-white text-neutral hover:text-white shadow-2xl shadow-neutral">
          Monthly Plans
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {pricings?.map((item, index) =>
          <PricingCard
            data={item}
            key={index}
            active={item.id === active}
            onClick={() => setActive(item.id)}
          />
        )}
      </div>
    </div>
  )
}