import Hero from './sections/hero/Hero';
import OurPortfolio from './sections/ourPortfolio/OurPortfolio';
import OurProject from './sections/ourProject/OurProject';
import Services from './sections/services/Services';

const Main = () => {
  return (
    <>
    <main className='flex flex-col gap-2r'>
      <Hero />
      <OurProject />
      <Services />
      <OurPortfolio />
    </main>
    </>
  )
}

export default Main