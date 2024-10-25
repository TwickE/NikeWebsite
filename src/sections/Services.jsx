import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
    return (
        <section className="max-container flex flex-wrap justify-center gap-9 padding-x py-10">
            {services.map((service, index) => (
                <ScrollAnimation animateIn='fadeInDownBig' delay={index === 0 ? 0 : index*100}>
                    <ServiceCard key={index} {...service} />
                </ScrollAnimation>
            ))}
        </section>
    )
}

export default Services