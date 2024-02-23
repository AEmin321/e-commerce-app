import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import HeroSlider from '../components/HeroSlider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSlider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home