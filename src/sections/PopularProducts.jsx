import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12 flex flex-col items-center'>
        <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-palanquin font-bold dark:text-slate-100'>Our <span className='text-coral-red'>Popular</span> Products</h2>
            <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-slate-100'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.</p> 
        </div>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 w-fit my-auto'>
            {products.map((product, index) => (
                <PopularProductCard key={index} {...product} />
            ))}
        </div>
    </section>
  )
}

export default PopularProducts