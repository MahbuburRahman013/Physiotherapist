import Link from "next/link"
import { PiArrowElbowRightFill } from "react-icons/pi"


function Blogs() {

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
        <div className="lg:container mx-auto px-3 my-20">
            <h1 className="text-4xl text-center font-semibold">Welcome the the Active Therapy Blog.</h1>
            <p className="text-center mt-5 mb-10">Find out about all things Physiotherapy and Chiropractic, covering health tips, self treatment advice, common conditions and latest updates in health. Follow us on Facebook to keep up to date with the latest.</p>

            <div className="grid w-full lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-16 ">
                {
                    data.map((item, index) => {
                        return (

                            <div key={index} className="flex flex-col gap-5 justify-between">
                                <div className="xl:w-full"><img className="rounded-[10px] w-full" src={item.img} /></div>

                                <div>
                                    <h1 className="text-2xl font-semibold mb-3 text-[#343434]">{item.title}</h1>
                                    <p className="text-[#084c61] font-semibold">June 4, 2024</p>
                                    <p>{item.description}</p>
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