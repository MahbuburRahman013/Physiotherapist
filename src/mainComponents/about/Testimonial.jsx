
import { RxQuote } from "react-icons/rx";

function Testimonial() {

    const data = [
        'I have made so much progress whilst Tina has helped me.  She truly is a brilliant physio.  I have so much to thank her for.',
        'Always very clear & articulate.  Fantastic!',
        'I was very pleased.  Tina was excellent in every respect.',
        'Very helpful and understanding.',
        'Tina has helped me on many occasions, and I cannot fault all she has done for me.',
        'Great commitment on the part of Tina.  Very supportive and dedicated.',
        'Seeing Tina was reassuring and helpful.  I’m very grateful to her.',
        'Thank you so much, excellent care from an outstanding physio.',
        'Fantastic physio seems to be helping a lot.',
        'Very friendly, approachable, and knowledgeable. ',
        'I felt at ease & more confident on the path to less pain and discomfort.',
        'The appointment was conducted really well.  The level of support and encouragement was very helpful and positive.',
        'Tina was excellent on all accounts.',
        'Tina was amazing.  She took note of everything I had to say, was able to immediately explain what was the most likely cause and provided excellent advise, exercises and physical treatment.  Amazing experience – as I was in bad way 10/10.',
        'The Physiotherapy form Tina Micallef has been amazing.  The first time I attended I could hardly move because of my pain in my shoulder and arm.  Over the course of my treatment and exercises my condition improved.  As a result of Tina’s encouragement have taken up Tai Chi and my life has almost got back to normal, going out with friends and fully active again Superb.'
    ]




    return (
        <div className="lg:container mx-auto px-3 mt-24 mb-20">
            <h1 className="text-6xl font-bold flex justify-center text-[#4fc0d0]"><RxQuote /></h1>
            <h1 className="text-4xl font-bold text-center mt-10 mb-20">Testimonials</h1>
            <div className="grid lg:grid-cols-2 md:px-20 lg:px-0 grid-cols-1 gap-x-10 gap-y-20">
                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className={`bg-[#4fc0d0] relative pt-24 ${(index + 1) === data.length && 'lg:col-span-2'} pb-5 px-7`}>
                                <div className="p-3 rounded-full absolute left-0 right-0 mx-auto -top-10 bg-white w-fit">
                                    <div className="border-2 rounded-full p-3 border-gray-600">
                                        <RxQuote className="text-5xl" />
                                    </div>
                                </div>
                                <p className="text-lg text-center">{item}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testimonial