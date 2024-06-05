import useAxiosPublic from "./useAxiosPublic";


async function useGetSingleBlog(title) {
    const axiosPublic = useAxiosPublic()
    const result = await axiosPublic.get(`/single-blog/${title}`);
    return result;
}

export default useGetSingleBlog