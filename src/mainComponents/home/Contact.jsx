import { MdOutlinePhoneInTalk } from "react-icons/md";

function Contact() {
    return (
        <div className="bg-[url('https://assets-global.website-files.com/64e2de4bbcf173db902ce001/64e459e8910d4b79fb120a65_Need%20Help%20Bg.webp')] py-20 w-full bg-cover bg-no-repeat">
            <div className="xl:w-[40%] lg:w-[70%] px-3 w-full mx-auto">
                <p className='text-[#00a9b7] text-center mb-8'>Need Help?</p>
                <h1 className='text-4xl font-bold text-center mb-10 text-gray-50'>Don&apos;t hesitate to contact our expert.</h1>
                <p className='text-gray-100 text-center'>Our staff are here to listen to your concerns and pain and are ready to help you live healthier and happier for longer.</p>

                <div className="text-gray-100 flex justify-center mt-10 items-center gap-3">
                    <div className="text-3xl bg-[#084c8d] text-gray-50 w-fit p-3 rounded-full">
                        <MdOutlinePhoneInTalk/>
                    </div>
                    <div>
                    <p>Book by phone</p>
                    <p className="text-2xl mt-1 font-semibold">9726 4491</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact