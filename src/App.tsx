import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Banner from './components/banner'
import LandingPage from './pages/landing';
import CareerPage from './pages/career';
import { Route, Routes } from 'react-router-dom';
import EduPage from './pages/edu';
import GalleryPage from './pages/gallery';

export const routesMapping = [
    {
        path: '/',
        index: true,
        element: <LandingPage />
    },
    {
        path: "/career",
        element: <CareerPage />
    },
    {
        path: "/edu",
        element: <EduPage />
    },
    {
        path: "/gallery",
        element: <GalleryPage />
    }
]

function App() {
  return (
     <div className='bg-white ml-8'>
      <Banner />
      <Header />
      <Routes>
          {
            routesMapping.map((route, index) => {
                return <Route key={index} path={route.path} element={route.element} />
            })
          }
      </Routes> 
      <Footer />
    </div>
  )
}

export default App
