import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'
import ScrollAnimation from 'react-animate-on-scroll';

const CustomerReviews = () => {
    return (
        <section className='bg-pale-blue padding dark:dark:bg-dark-pale-blue'>
            <div className="max-container">
                <ScrollAnimation animateIn='fadeInDown'>
                    <h3 className="font-palanquin text-center text-4xl font-bold dark:text-slate-100">
                        What Our
                        <span className="text-coral-red"> Customers </span>
                        Say?
                    </h3>
                    <p className="info-text m-auto mt-4 max-w-lg text-center dark:text-slate-100">Hear genuine stories from our satisfied customers about their exception experiences with us.</p>
                </ScrollAnimation>
                <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                    {reviews.map((review, index) => (
                        <ScrollAnimation key={index} animateIn='fadeInDownBig' delay={index === 0 ? 0 : index * 100}>
                            <ReviewCard imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews