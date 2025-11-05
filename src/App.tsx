import './App.css'
import Layout from './Component/Layout'
import Rooms from './Component/Rooms'
import RoomSelection from './Component/RoomSelection'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
                <Route element={<Layout/>} >

                    <Route path="/rooms" element={<RoomSelection />} />

                </Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
