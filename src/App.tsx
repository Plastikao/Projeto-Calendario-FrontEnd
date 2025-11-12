import Layout from './Component/Layout'
import RoomSelection from './Component/RoomSelection'
import './index.css'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ModalPage from './Pages/ModalTest'
import ReservPage from './Pages/ReservPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
                <Route element={<Layout/>} >

                    <Route path="/rooms" element={<RoomSelection />} />
                    <Route path="/modal" element={<ModalPage />} />
                    <Route path="/reservar" element={<ReservPage />} />

                </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
