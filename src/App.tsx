import './App.css'
import Header from './components/header'
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
        element: <EduPage school={''} duration={''} desc={''} edulevel={''} />
    },
    {
        path: "/gallery",
        element: <GalleryPage />
    }
]

function App() {
  return (
     <div className={window.screen.width <= 768 ? "m-2" : "m-12"}>
        <div className="rounded-[8px]">
            <Header />
            <Routes>
                {
                    routesMapping.map((route, index) => {
                        return <Route key={index} path={route.path} element={route.element} />
                    })
                }
            </Routes> 
        </div>
    </div>
  )
}

export default App
