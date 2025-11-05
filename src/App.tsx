import './App.css'
import Layout from './Component/Layout'
import Rooms from './Component/Rooms'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
                <Route element={<Layout/>} >

                    <Route path="/rooms" element={<Rooms />} />

                </Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
