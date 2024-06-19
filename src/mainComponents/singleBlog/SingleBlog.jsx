"use client"
import Image from "next/image"
import DOMPurify from 'dompurify';

function SingleBlog({blog}) {

    const sanitizedContent = DOMPurify.sanitize(blog.content);

    return (
        <div className="lg:container mx-auto px-3 md:my-24 my-10">
            <h1 className="text-center md:text-[2.30rem] text-3xl font-bold xl:w-[75%] w-full mx-auto text-[#343434]">{blog?.title}</h1>
            <div className="relative lg:w-[65%] sm:w-[80%] w-[95%] aspect-auto lg:h-[450px] md:h-[350px] sm:h-[250px] h-[200px] mx-auto md:my-20 my-10">
                <Image layout="fill" src={blog?.img_url} />
            </div>
           <p className="mb-5 text-[#1b6b93]">{blog?.postedDate}</p>
            <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
           
        </div >
    )
}

export default SingleBlog