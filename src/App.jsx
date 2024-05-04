import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Landingpage from "./landingpage"


function App() {



  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route index element={<Landingpage />} />
            <Route path="/landingpage" element={<Landingpage />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  )
}

export default App
