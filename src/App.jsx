import { useState } from 'react'
import Drawer from './Drawer'
import MainPage from './MainPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* content goes here */}
          <MainPage />
          
        </div>
        <div className="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <Drawer />
        </div>
      </div>

    </>
  )
}

export default App
