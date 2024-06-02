import AboutPerson from '@/mainComponents/about/AboutPerson'
import Testimonial from '@/mainComponents/about/Testimonial'
import Banner from '@/mainComponents/sheared/Banner'


function AboutPage() {
  return (
    <div className='mb-10'>
      <Banner title={'About'} bgImg={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/IMG_9696-1024x683.jpg'} />
      <AboutPerson/>
      <Testimonial/>
    </div>
  )
}

export default AboutPage