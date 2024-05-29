"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import './banner.css'

function Banner() {

    const images = [
        'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_186426662-1024x683.jpeg',
        'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_186427438-1024x749.jpeg',
        'https://www.physio-therapies.co.uk/wp-content/uploads/2024/03/AdobeStock_528361659-683x1024.jpeg'
    ]




    return (
        <div className='relative h-[70vh]  w-full'>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    images.map((item, index) => <div key={index}>
                        <SwiperSlide className="w-full">
                            <div style={{ backgroundImage: `url(${item})` }} className="w-full bg-center bg-no-repeat bg-cover h-[70vh]">

                            </div>

                        </SwiperSlide>
                    </div>)
                }
            </Swiper>

            <div className='absolute top-0 w-full  h-full z-10 bg-[#4fc0d040]'>
                <div className='lg:container mx-auto md:px-10 px-3 flex flex-col justify-center gap-y-5 h-full'>
                    <h1 className='md:text-5xl text-center md:text-start text-3xl font-bold'>Physiotherapist</h1>
                    <h1 className='md:text-5xl text-center md:text-start text-3xl font-bold text-white'>Bringing a personal wealth of experience</h1>
                </div>
            </div>
        </div>
    )
}

export default Banner