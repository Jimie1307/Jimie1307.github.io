import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import LandingPage from './pages/landing'
import Banner from './components/banner'

function App() {
  return (
    <div className='bg-white ml-8'>
      <Banner></Banner>
      <Header></Header>
      <LandingPage></LandingPage>
      <Footer></Footer>
    </div>
  )
}

export default App
