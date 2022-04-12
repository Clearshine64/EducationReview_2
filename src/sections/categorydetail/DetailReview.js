import { Icon } from "@iconify/react";

export default function DetailReview({ data }) {

  const { } = data;

  return (
    <div className='container max-w-6xl px-5 mb-20'>
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='rounded-2xl bg-neutral/10 flex flex-col items-center text-center p-5'>
          <Icon icon={'ion:megaphone-outline'} className="w-14 h-14 text-neutral mb-5" />
          <p className='text-neutral font-bold text-3xl mb-3'>
            30 thousand
          </p>
          <p className='text-xl font-bold'>Reviews seen every month</p>
          <p className='p-3'>
            Over 30 thousand review impressions every month
          </p>
        </div>
        <div className='rounded-2xl bg-neutral/10 flex flex-col items-center text-center p-5'>
          <Icon icon={'ion:flag'} className="w-14 h-14 text-neutral mb-5" />
          <p className='text-neutral font-bold text-3xl mb-3'>
            5 thousand
          </p>
          <p className='text-xl font-bold'>real reviews per month</p>
          <p className='p-3'>
            Over 30 thousand review impressions every month
          </p>
        </div>
        <div className='rounded-2xl bg-neutral/10 flex flex-col items-center text-center p-5'>
          <Icon icon={'ic:outline-rocket'} className="w-14 h-14 text-neutral mb-5" />
          <p className='text-neutral font-bold text-3xl mb-3'>
            1 thousand
          </p>
          <p className='text-xl font-bold'>have a great return</p>
          <p className='p-2'>
            Over 30 thousand review impressions every month
          </p>
        </div>
      </div>
    </div>
  )
}