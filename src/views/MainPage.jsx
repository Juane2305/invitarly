import FeaturesSection from '../components/Funciones'
import  Header  from '../components/Header'
import { ImagenPrincipal } from '../components/ImagenPrincipal'
import PricingSection from '../components/PricingSection'
import TestimonialSlider from '../components/TestimonialSlider'

export const MainPage = () => {
  return (
    <div>
        <Header/>
        <ImagenPrincipal/>
        <FeaturesSection/>
        <TestimonialSlider/>
        <PricingSection/>
    </div>
  )
}
