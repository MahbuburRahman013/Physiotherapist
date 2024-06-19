import useGetSingleBlog from "@/hooks/useGetSingleBlog";
import dynamic from 'next/dynamic'
const SingleBlog = dynamic(() => import('@/mainComponents/singleBlog/SingleBlog'), {
  ssr: false,
})

async function BlogDynamicPage({params}) {
  const queryTitle =  params.title;
  const {data: blog} = await useGetSingleBlog(queryTitle)
// console.log(blog, queryTitle);  

  return (
    <div>
      <SingleBlog blog={blog} />
    </div>
  );
}

export default BlogDynamicPage;
