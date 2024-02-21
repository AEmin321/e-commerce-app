import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import HeroSlider from '../components/HeroSlider'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSlider />
    </div>
  )
}

export default Home