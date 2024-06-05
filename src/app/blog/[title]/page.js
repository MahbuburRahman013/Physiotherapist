import useGetSingleBlog from "@/hooks/useGetSingleBlog";
import SingleBlog from "@/mainComponents/singleBlog/SingleBlog";

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
