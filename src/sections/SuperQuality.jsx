import Button from "../components/Button"
import { shoe8 } from '../assets/images/'
import ScrollAnimation from 'react-animate-on-scroll';

const SuperQuality = () => {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container padding">
            <ScrollAnimation animateIn='fadeInLeft' className="flex flex-1 flex-col">
                <h2 className='font-palanquin text-4xl capitalize font-bold dark:text-slate-100 lg:max-w-lg'>
                    We Provide You
                    <span className='text-coral-red'> Super</span>
                    <span className='text-coral-red'> Quality</span> Shoes
                </h2>
                <p className='mt-4 lg:max-w-lg info-text dark:text-slate-100'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                <p className="mt-6 lg:max-w-lg info-text dark:text-slate-100">Our dedication to detail and excellence ensures your satisfaction</p>
                <div className="mt-11">
                    <Button label='View Details' />
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInRight' className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe image" width={570} height={522} className="object-contain" />
            </ScrollAnimation>
        </section>
    )
}

export default SuperQuality