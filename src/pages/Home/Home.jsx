import Nav from '../../components/nav/nav'
import Footer from '../../components/footer/footer'
import './Home.css'
import Breadcrumb from '../../components/breadcrumbs/breadcrumb'
import Hero from '../../components/sections/hero/hero'
import ShopSection from '../../components/sections/shop-section/shop-section'
import AboutSection from '../../components/sections/about-section/about-section'
import FeaturesSection from '../../components/sections/features-section/features-section'
import WholesaleSection from '../../components/sections/wholesale-section/wholesale-section'
import MealsSection from '../../components/sections/meals-section/meals-section'
import TestimonialSection from '../../components/sections/testimonial-section/testimonial-section'
import FinalSection from '../../components/sections/final-section/final-section'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <ShopSection/>
        <AboutSection />
        <FeaturesSection />
        <WholesaleSection />
        <MealsSection />
        <TestimonialSection />
        <FinalSection />
        <Breadcrumb />
        <Footer/>
    </div>
  )
}

export default Home