import useGetAllBlogs from "@/hooks/useGetAllBlogs";
import Footer from "@/mainComponents/Footer";
import Banner from "@/mainComponents/home/Banner";
import Blog from "@/mainComponents/home/Blog";
import Contact from "@/mainComponents/home/Contact";
import Help from "@/mainComponents/home/Help";
import Services from "@/mainComponents/home/Services";
import Testimonial from "@/mainComponents/home/Testimonial";
import TinaAbout from "@/mainComponents/home/TinaAbout";
import Navbar from "@/mainComponents/Navbar";


export default async function Home() {
  const blogs = await useGetAllBlogs(4)
 
  return (
    <div>
      <Navbar/>
      <Banner/>
      <TinaAbout/>
      <Services/>
      <Help/>
      <Blog blogs={blogs} />
      <Contact/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}
