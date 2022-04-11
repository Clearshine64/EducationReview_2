import Accordion from "../../components/Accordion";



export default function AboutValues(){
  return(
    <div className=' px-5 mb-24'>
    <div className='flex flex-col gap-5 mb-8 justify-center items-center'>
      <p className='text-center font-bold text-4xl'>
        Our values
      </p>
      <div className='w-72'>
        <div className='divider text-center before:bg-neutral after:bg-neutral '>
          <img src={'/images/home/divider.svg'} alt="" />
        </div>
      </div>
      <p className='text-center text-xl text-gray-500'>
        Cum doctus civibus efficiantur in imperdiet deterruisset.
      </p>
    </div>
    <div className='flex flex-col gap-5'>
      {collapsData.map((item, index) =>
        <Accordion
          key={index}
          title={item.title}
          className="rounded-2xl shadow-lg  "
          summaryClassName='text-lg  font-bold min-h-[5rem] text-neutral'
        >
          <p className='p-5 pt-0 leading-8'>
            {item.content}
          </p>
        </Accordion>
      )}
    </div>
  </div>
  )
}

const collapsData = [
  {
    id: 12783123128,
    title: 'Helps consumers and companies',
    content: `Sumo periculis inciderint ius ex. Sit te fierent probatus delicata, id mel nonumy consul oporteat. Agam tractatos te eam, iisque 
vulputate moderatius cu sit. Oratio complectitur contentiones nam ut, at legere maiorum fierent duo. Mel ea vero aliquid. Sumo Sumo periculis inciderint ius ex. Sit te fierent probatus delicata, id mel nonumy consul oporteat. Agam tractatos te eam, iisque 
vulputate moderatius cu sit. Oratio complectitur contentiones nam ut, at legere maiorum fierent duo. Mel ea vero aliquid. Sumo`,
  },
  {
    id: 12783123128,
    title: 'Shoppers and retailers benefits',
    content: `Sumo periculis inciderint ius ex. Sit te fierent probatus delicata, id mel nonumy consul oporteat. Agam tractatos te eam, iisque 
vulputate moderatius cu sit. Oratio complectitur contentiones nam ut, at legere maiorum fierent duo. Mel ea vero aliquid. Sumo Sumo periculis inciderint ius ex. Sit te fierent probatus delicata, id mel nonumy consul oporteat. Agam tractatos te eam, iisque 
vulputate moderatius cu sit. Oratio complectitur contentiones nam ut, at legere maiorum fierent duo. Mel ea vero aliquid. Sumo`,
  },
  {
    id: 12783123128,
    title: 'Making e-commerce so divers',
    content: `Sumo periculis inciderint ius ex. Sit te fierent probatus delicata, id mel nonumy consul oporteat. Agam tractatos te eam, iisque 
vulputate moderatius cu sit. Oratio complectitur contentiones nam ut, at legere maiorum fierent duo. Mel ea vero aliquid. Sumo Sumo periculis inciderint ius ex. Sit te fierent probatus delicata, id mel nonumy consul oporteat. Agam tractatos te eam, iisque 
vulputate moderatius cu sit. Oratio complectitur contentiones nam ut, at legere maiorum fierent duo. Mel ea vero aliquid. Sumo`,
  },
  {
    id: 12783123128,
    title: 'Assess their service daily',
    content: `Sumo periculis inciderint ius ex. Sit te fierent probatus delicata, id mel nonumy consul oporteat. Agam tractatos te eam, iisque 
vulputate moderatius cu sit. Oratio complectitur contentiones nam ut, at legere maiorum fierent duo. Mel ea vero aliquid. Sumo Sumo periculis inciderint ius ex. Sit te fierent probatus delicata, id mel nonumy consul oporteat. Agam tractatos te eam, iisque 
vulputate moderatius cu sit. Oratio complectitur contentiones nam ut, at legere maiorum fierent duo. Mel ea vero aliquid. Sumo`,
  }
]