import './App.css'
import Layout from './Component/Layout'
import RoomSelection from './Component/RoomSelection'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ModalPage from './Pages/ModalTest'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
                <Route element={<Layout/>} >

                    <Route path="/rooms" element={<RoomSelection />} />
                    <Route path="/modal" element={<ModalPage />} />

                </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
