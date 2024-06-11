import useGetSingleBlog from "@/hooks/useGetSingleBlog";
import dynamic from "next/dynamic";

const EditBlog = dynamic(() => import("@/mainComponents/dashboard/EditBlog"), {
  ssr: false,
});

async function EditBlogPage({params}) {
  
  const { data: blog } = await useGetSingleBlog(params.queryTitle);

  return (
    <div>
      <EditBlog blog={blog} />
    </div>
  );
}

export default EditBlogPage;
