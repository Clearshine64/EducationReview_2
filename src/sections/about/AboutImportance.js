import Image from "../../components/Image";

export default function AboutImportance() {
  return (
    <div className=" py-10 px-5 mb-20 ">
      <div className='grid  md:grid-cols-2 gap-5'>

        <div className='flex items-center gap-5'>
          <Image src={'/images/about/importance_1.png'} />
          <div className='flex flex-col gap-5'>
            <Image src={'/images/about/importance_2.png'} />
            <Image src={'/images/about/importance_3.png'} />
          </div>

        </div>

        <div className="flex flex-col justify-center">
          <p className='text-3xl font-bold mb-5'>Importance of Education</p>
          <p className='leading-10'>
            Arguably the most important decision you’ll have to make as a parent or for
            yourself post your schooling education. We all learn differently and we can be
            catered for through a diverse range of private and online education platforms.
          </p>
        </div>

      </div>
    </div>
  )
}