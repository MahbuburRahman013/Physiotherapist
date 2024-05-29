import Banner from "@/mainComponents/home/Banner";
import Help from "@/mainComponents/home/Help";
import Services from "@/mainComponents/home/Services";
import Testimonial from "@/mainComponents/home/Testimonial";
import TinaAbout from "@/mainComponents/home/TinaAbout";


export default function Home() {
  return (
    <div className="">
      <Banner/>
      <TinaAbout/>
      <Services/>
      <Help/>
      <Testimonial/>
    </div>
  )
}
