import Image from "../../components/Image";

export default function AboutHero() {
  return (
    <div className=" py-10 px-5 mb-20 ">
      <div className='grid  md:grid-cols-2 gap-5'>
        <div className="flex flex-col justify-center">
          <p className='text-3xl font-bold mb-5'>Accurate Data</p>
          <p className='leading-10'>
            We provide you the opportunity to read real life experiences from parents
            and students. Most often we rely on advice from fellow peers within your
            immediate circle. By using our platform you’ll be most informed, allowing
            you to make the most accurate dec
          </p>

        </div>
        <div className=''>
          <div className='relative   mr-[10%] mb-[10%]'>
            <Image
              className='bg-[#57a052] rounded-2xl border-0 '
              src={'/images/about/about-data.png'}
            />
            <div className='absolute -bottom-[10%] w-full h-full -z-[1] -right-[10%] rounded-lg bg-neutral/40' />

          </div>

        </div>
      </div>
    </div>
  )
}