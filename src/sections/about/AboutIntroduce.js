export default function AboutIntroduce() {
  return (
    <div className=' py-10 px-5 mb-20 '>
      <div className='grid  md:grid-cols-2 gap-5'>
        <div className="flex flex-col justify-center">
          <p className='text-3xl font-bold mb-5'> We envision a world where anyone,
            anywhere has the power to transform through learning.
          </p>
          <p className='leading-10'>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident, similique At vero eos et accusamus et iusto odio di
          </p>
        </div>
        <div className='flex flex-col h-full justify-between'>
          <div className='flex justify-around'>
            <div >
              <p className='text-5xl text-neutral font-bold mt-6'>
                360+
              </p>
              <p className=''>
                Et nec tantas
              </p>
            </div>
            <div >
              <p className='text-5xl text-neutral font-bold '>
                650+
              </p>
              <p className=''>
                Et nec tantas
              </p>
            </div>
          </div>
          <div className='flex justify-around'>
            <div >
              <p className='text-5xl text-neutral font-bold mt-6'>
                1200+
              </p>
              <p className=''>
                Et nec tantas
              </p>
            </div>
            <div >
              <p className='text-5xl text-neutral font-bold '>
                100%
              </p>
              <p className=''>
                Et nec tantas
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}