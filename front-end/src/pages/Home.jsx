import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import HeroSlider from '../components/HeroSlider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import SectionHeading from '../components/SectionHeading'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSlider />
      <Categories />
      <SectionHeading name="TRENDING NOW" info="WHAT PEOPLE ARE BUYING"/>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home