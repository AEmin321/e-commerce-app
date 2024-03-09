import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      {/* <Announcement />
      <Navbar /> */}
      <HeroSection />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home