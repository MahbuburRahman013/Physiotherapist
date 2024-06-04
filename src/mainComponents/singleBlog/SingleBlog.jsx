import Image from "next/image"


function SingleBlog() {
    return (
        <div className="lg:container mx-auto px-3 md:my-24 my-10">
            <h1 className="text-center md:text-5xl text-3xl font-bold xl:w-[75%] w-full mx-auto text-[#343434]">Alleviate Lower Back Pain With Manual Therapy Methods</h1>
            <div className="relative lg:w-[65%] sm:w-[80%] w-[95%] aspect-auto lg:h-[450px] md:h-[350px] sm:h-[250px] h-[200px] mx-auto md:my-20 my-10">
                <Image layout="fill" src={'https://assets-global.website-files.com/64e45036e4ad113bb6622008/657db4bc20fcf18489e86a7f_Alleviate_Lower_Back_Pain_With_Manual_Therapy_Methods.webp'} />
            </div>

            <h2 className="md:text-4xl text-2xl my-4 text-[#343434]">Alleviate Lower Back Pain With Manual Therapy Methods</h2>
            <div className="flex flex-col gap-y-3">
                <p>Lower back pain is a prevalent condition that affects a significant portion of the population, leading to discomfort and impairment in daily activities.</p>

                <p>Manual therapy methods have emerged as effective modalities for alleviating this common musculoskeletal complaint. These hands-on techniques, applied by skilled therapists, aim to improve movement and function while reducing pain.</p>

                <p>This introductory overview will shed light on various manual therapy approaches, including mobilisation, manipulation, and soft tissue massage.
                </p>
                <p>
                    We will also explore self-administered stretches that can support the therapeutic process. By understanding the principles and applications of these methods, individuals suffering from lower back pain can make informed decisions about incorporating manual therapy into their recovery regimen.
                </p>
            </div>
        </div >
    )
}

export default SingleBlog