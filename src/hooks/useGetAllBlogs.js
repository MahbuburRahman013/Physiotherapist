



 async function useGetAllBlogs() {
    const result = await fetch('/all-blogs', {
         cache:'no-cache'
    });
    return result

}

export default useGetAllBlogs