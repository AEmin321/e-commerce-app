import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import HeroSlider from '../components/HeroSlider'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSlider />
      <Categories />
    </div>
  )
}

export default Home