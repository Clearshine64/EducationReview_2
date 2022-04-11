import { AboutHero, AboutImportance, AboutIntroduce, AboutValues } from '../sections/about';


export default function About() {

 
  return (
    <div className='container max-w-6xl'>

      <p className='text-3xl font-bold mb-8 text-center'>About</p>

      <AboutHero />

      <AboutIntroduce />

      <AboutImportance />

      <AboutValues />

    </div>
  )
}