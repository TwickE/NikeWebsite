import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import ScrollAnimation from 'react-animate-on-scroll';

const SpecialOffer = () => {
    return (
        <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container padding">
            <ScrollAnimation animateIn='fadeInLeft' className="flex-1">
                <img src={offer} alt="offer image collection" width={773} height={687} className='object-contain w-full' />
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInRight' className="flex flex-1 flex-col">
                <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg dark:text-slate-100'>
                    <span className='text-coral-red'>Special </span>Offer
                </h2>
                <p className='mt-4 info-text dark:text-slate-100'>
                    Embark on a shopping journey that redefines your experience with
                    unbeatable deals. From premier selections to incredible savings, we
                    offer unparalleled value that sets us apart.
                </p>
                <p className='mt-6 info-text dark:text-slate-100'>
                    Navigate a realm of possibilities designed to fulfill your unique
                    desires, surpassing the loftiest expectations. Your journey with us is
                    nothing short of exceptional.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label='Shop Now' iconURL={arrowRight} />
                    <Button label='Learn More' backgroundColor="bg-white dark:bg-slate-950" borderColor="border-slate-gray" textColor="text-slate-gray dark:text-slate-100" />
                </div>
            </ScrollAnimation>
        </section>
    )
}

export default SpecialOffer