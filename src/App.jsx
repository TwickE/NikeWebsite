import Nav from './sections/Nav'
import Hero from './sections/Hero'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'

const App = () => (
    <>
        <Nav />
        <main className="relative dark:bg-slate-900">
            <Hero />
            <PopularProducts />
            <SuperQuality />
            <Services />
            <SpecialOffer />
            <CustomerReviews />
            <Subscribe />
        </main>
        <Footer />
    </>

)

export default App;