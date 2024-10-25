import Button from '../components/Button'
import ScrollAnimation from 'react-animate-on-scroll';

const Subscribe = () => {
    return (
        <section id="contact-us">
            <ScrollAnimation animateIn='fadeInLeft' className="flex max-container justify-between items-center max-lg:flex-col gap-10 padding-x sm:py-32 py-16 w-full">
                <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold  dark:text-slate-100">
                    Sign Up for
                    <span className="text-coral-red"> Updates</span> & Newsletter
                </h3>
                <div className='lg:max-w[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray dark:border-slate-100 rounded-full'>
                    <input type="text" placeholder="subscribe@nike.com" className="input" />
                    <div className='flex max-sm:justify-end items-center max-sm:w-full'>
                        <Button label="Sign Up" fullWidth />
                    </div>
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default Subscribe