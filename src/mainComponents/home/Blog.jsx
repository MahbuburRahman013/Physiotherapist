import Link from "next/link"
import { PiArrowElbowRightFill } from "react-icons/pi";


function Blog() {

    const data = [
        {
            img: 'https://assets-global.website-files.com/64e45036e4ad113bb6622008/66387fa787023dddf0747547_blog-88.webp',
            title: 'The Science Behind Chiro and Spinal Health',
            description: 'Discover the science behind chiropractic care and its impact on spinal health. Learn how chiropractic adjustments can alleviate pain, improve mobil'
        },
        {
            img: 'https://assets-global.website-files.com/64e45036e4ad113bb6622008/66387fa787023dddf0747547_blog-88.webp',
            title: 'The Science Behind Chiro and Spinal Health',
            description: 'Discover the science behind chiropractic care and its impact on spinal health. Learn how chiropractic adjustments can alleviate pain, improve mobil'
        },
        {
            img: 'https://assets-global.website-files.com/64e45036e4ad113bb6622008/66387fa787023dddf0747547_blog-88.webp',
            title: 'The Science Behind Chiro and Spinal Health',
            description: 'Discover the science behind chiropractic care and its impact on spinal health. Learn how chiropractic adjustments can alleviate pain, improve mobil'
        },
        {
            img: 'https://assets-global.website-files.com/64e45036e4ad113bb6622008/66387fa787023dddf0747547_blog-88.webp',
            title: 'The Science Behind Chiro and Spinal Health',
            description: 'Discover the science behind chiropractic care and its impact on spinal health. Learn how chiropractic adjustments can alleviate pain, improve mobil'
        },
    ]



    return (
        <div className="my-20 lg:container mx-auto px-3">
            <h1 className="text-4xl font-bold text-center text-[#343434]">Latest Blogs &amp; Articles</h1>

            <div className="grid w-full md:grid-cols-2 grid-cols-1 gap-10 mt-16 ">
                {
                    data.map((item, index) => {
                        return (

                            <div key={index} className="flex flex-col xl:flex-row gap-5 justify-between">
                                <div className="xl:w-full"><img className="rounded-[10px] w-full" src={item.img} /></div>

                                <div>
                                    <h1 className="text-2xl font-semibold mb-3 text-[#084c61]">{item.title}</h1>
                                    <p>{item.description}</p>
                                    <Link href='/'>
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

export default Blog