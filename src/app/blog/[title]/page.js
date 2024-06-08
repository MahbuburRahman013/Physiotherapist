import useGetSingleBlog from "@/hooks/useGetSingleBlog";
import dynamic from 'next/dynamic'
const SingleBlog = dynamic(() => import('@/mainComponents/singleBlog/SingleBlog'), {
  ssr: false,
})

async function BlogDynamicPage({params}) {
  const title =  decodeURIComponent(params.title);
  const {data: blog} = await useGetSingleBlog(title)
  console.log(blog)

  return (
    <div>
      <SingleBlog blog={blog} />
    </div>
  );
}

export default BlogDynamicPage;
