"use client"
import cheerio from 'cheerio';
import Link from "next/link"
import { PiArrowElbowRightFill } from "react-icons/pi";


function Blog({blogs}) {

   



    return (
        <div className="my-20 lg:container mx-auto px-3">
            <h1 className="text-4xl font-bold text-center text-[#343434]">Latest Blogs &amp; Articles</h1>

            <div className="grid w-full md:grid-cols-2 grid-cols-1 gap-10 mt-16 ">
            {
                    blogs?.map((item, index) => {


                        const data = cheerio.load(item.content);
                        const textContent = data('body').text();

                        return (

                            <div key={index} className="flex lg:flex-row flex-col gap-5 ">
                                <img className="rounded-[10px] lg:w-[45%] md:w-[80%]
                                w-[90%] md:mx-0 mx-auto h-[180px]" src={item.img_url} />

                                <div className='lg:w-[55%] w-full'>
                                    <h1 className="text-2xl font-semibold mb-3 text-[#343434]">{item?.title}</h1>
                                    <p className="text-[#084c61] font-semibold">June 4, 2024</p>
                                    <p className="line-clamp-3">{textContent}</p>
                                    <Link href={`/blog/${item.queryTitle}`}>
                                        <button className="flex text-[#e7a977] gap-2 items-center text-lg mt-3 font-semibold hover:text-[#e38537] transition duration-300">Read More <PiArrowElbowRightFill /></button>
                                    </Link>
                                </div>

                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blog