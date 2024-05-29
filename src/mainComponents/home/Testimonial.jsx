"use client"
import { FaQuoteRight } from "react-icons/fa";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

function Testimonial() {

    const data = [
        'Always very clear & articulate. Fantastic!',
        'I was very pleased. Tina was excellent in every respect.',
        'A wonderful experience, very professional.',
        'Exceptional service and very courteous staff.',
        'Highly recommend, will definitely return.',
        'The best experience I have had in a long time.',
        'Thorough and attentive, couldn’t ask for more.',
        'Absolutely brilliant from start to finish.',
        'Impressed with the attention to detail.',
        'Exceeded all my expectations, truly great.',
        'Friendly, efficient, and extremely helpful.',
        'Outstanding support and great communication.',
        'Very knowledgeable and answered all my questions.',
        'Top-notch service, highly appreciated.',
        'Quick, professional, and very helpful.',
        'Made the process easy and stress-free.',
        'Excellent customer service, very satisfied.',
        'Warm and welcoming, felt very comfortable.',
        'Prompt and reliable, would recommend.',
        'Fantastic quality and amazing service.'
    ];


    return (
        <div className="lg:container mx-auto py-16">
            <h1 className="text-5xl font-bold flex justify-center text-[#4fc0d0]"><FaQuoteRight /></h1>
            <h1 className="text-4xl font-bold text-center my-10 text-[#4e727f]">Testimonials</h1>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper border-spacing-1"
            >
                {
                    data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="mb-20 mt-10 text-center">{item}</SwiperSlide>
                        )
                    })
                }


            </Swiper>

        </div>
    )
}

export default Testimonial