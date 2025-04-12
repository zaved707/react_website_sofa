
import { Routes,Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Contact from './pages/Contact'

export default function App() {
  

  return (
    <Routes>
        <Route path='/react_website_sofa' element={ <MainPage />} />
        <Route path='/react_website_sofa/about' element={ <Contact />} />

       
       
    </Routes>

      
   
  )
}

