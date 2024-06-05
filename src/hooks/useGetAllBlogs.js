import useAxiosPublic from "./useAxiosPublic"


 async function useGetAllBlogs() {
    const axiosPublic = useAxiosPublic()
    const result = await axiosPublic.get('/all-blogs');
    return result

}

export default useGetAllBlogs