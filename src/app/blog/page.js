import useGetAllBlogs from "@/hooks/useGetAllBlogs"
import Blogs from "@/mainComponents/blog/Blogs"
import Banner from "@/mainComponents/sheared/Banner"


async function BlogPage() {
   const blogs1 = await useGetAllBlogs('')
  
   function parseDate(dateStr) {
    return new Date(dateStr);
  }

  const blogs = blogs1.sort((a, b) => {
    return parseDate(b?.postedDate) - parseDate(a?.postedDate);
  });

  return (
    <div>
      <Banner bgImg={'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_242057780-1.jpg'} title={'Blog'} />
      <Blogs blogs={blogs}/>
    </div>
  )
}

export default BlogPage