import useAxiosPublic from "./useAxiosPublic"


 const useGetAllBlogs = async () => {
    const axiosPublic = useAxiosPublic()
    const result = await axiosPublic.get('/all-blogs');
    return result;

}

export default useGetAllBlogs