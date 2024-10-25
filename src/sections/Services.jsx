import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section className="max-container flex flex-wrap justify-center gap-9 padding-x py-10">
        {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
        ))}
    </section>
  )
}

export default Services