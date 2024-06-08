

 async function useGetAllBlogs() {
    const result = await fetch('https://physiotherapistserver.vercel.app/all-blogs', {
         next:{
          revalidate: 10 ,
         }
    });
    return result.json()

}

export default useGetAllBlogs