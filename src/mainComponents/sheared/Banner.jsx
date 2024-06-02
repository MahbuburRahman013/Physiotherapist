

function Banner({ bgImg, title }) {
    return (
        <div className="py-[145px] relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }} >
            <div className="absolute w-full top-0 h-full bg-gradient-to-l to-[#164b60] from-transparent">
                <div className="flex items-center w-[70%] h-full mx-auto text-white">
                    <h1 className="text-4xl font-semibold">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner