"use client"
import Link from "next/link"
import { PiArrowElbowRightFill } from "react-icons/pi"


function Blogs({ blogs }) {

   
        // const stripHtmlTags = (html) => {
        //     const doc = new DOMParser().parseFromString(html, 'text/html');
        //     return doc.body.textContent || "";
        // };

  

    return (
        <div className="lg:container mx-auto px-3 my-20">
            <h1 className="text-4xl text-center font-semibold">Welcome the the Active Therapy Blog.</h1>
            <p className="text-center mt-5 mb-10">Find out about all things Physiotherapy and Chiropractic, covering health tips, self treatment advice, common conditions and latest updates in health. Follow us on Facebook to keep up to date with the latest.</p>

            <div className="grid w-full lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-16 ">
                {
                    blogs?.map((item, index) => {





                        // const text = stripHtmlTags(item.content);




                        return (

                            <div key={index} className="flex flex-col gap-5 justify-between">
                                <div className="xl:w-full h-[230px]"><img className="rounded-[10px] w-full h-full" src={item.img_url} /></div>

                                <div>
                                    <h1 className="text-2xl font-semibold mb-3 text-[#343434]">{item?.title}</h1>
                                    <p className="text-[#084c61] font-semibold">June 4, 2024</p>
                                    <p className="line-clamp-3">{item.content}</p>
                                    <Link href={`/blog/${item.title}`}>
                                        <button className="flex text-[#e7a977] gap-2 items-center text-lg mt-3 font-semibold">Read More <PiArrowElbowRightFill /></button>
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

export default Blogs