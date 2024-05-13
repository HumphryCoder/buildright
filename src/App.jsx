import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Landingpage from "./landingpage"
import Docs from "./docs"
import Introduction from "./introduction"
import Button from './docsButton'
import Cards from './docsCards'


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage />} />
          <Route path="landingpage" element={<Landingpage />} />

          <Route path="docs" element={<Docs />}>

            <Route path="introduction" element={<Introduction />} />
            <Route path="button" element={<Button />} />
            <Route path="cards" element={<Cards />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
