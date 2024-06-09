import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import Banner from "@/mainComponents/home/Banner";
import Blog from "@/mainComponents/home/Blog";
import Contact from "@/mainComponents/home/Contact";
import Help from "@/mainComponents/home/Help";
import Services from "@/mainComponents/home/Services";
import Testimonial from "@/mainComponents/home/Testimonial";
import TinaAbout from "@/mainComponents/home/TinaAbout";


export default async function Home() {
  const blogs = await useGetAllBlogs(4)
 
  return (
    <div>
      <Banner/>
      <TinaAbout/>
      <Services/>
      <Help/>
      <Blog blogs={blogs} />
      <Contact/>
      <Testimonial/>
    </div>
  )
}
