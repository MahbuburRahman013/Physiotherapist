import Manage from "@/mainComponents/manage-dashbrd/Manage";

async function ManagePage() {
    const result = await fetch(`https://physiotherapistserver.vercel.app/all-blogs-manage`, {
        cache: 'no-cache'
   });
   const blogsData = await result.json();
   

  return (
    <div>
      <Manage blogsData={blogsData} />
    </div>
  );
}

export default ManagePage;
