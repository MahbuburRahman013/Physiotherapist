import Manage from "@/mainComponents/manage-dashbrd/Manage";

async function ManagePage() {
  const result = await fetch(`https://physiotherapistserver.vercel.app/all-blogs-manage`, {
    cache: "no-cache",
  });
  const data = await result.json();

  function parseDate(dateStr) {
    return new Date(dateStr);
  }
  const blogsData = data.sort((a, b) => {
    return parseDate(b?.postedDate) - parseDate(a?.postedDate);
  });

  return (
    <div>
      <Manage blogsData={blogsData} />
    </div>
  );
}

export default ManagePage;
