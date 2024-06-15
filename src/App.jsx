import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Landingpage from "./landingpage"
import Docs from "./docs"
import Introduction from "./introduction"
import Testing from "./testing"
import Button from './docsButton'
import Cards from './docsCards'
import { Helmet } from 'react-helmet'


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage />} />
          <Route path="landingpage" element={<Landingpage />} />
          <Route path="testing" element={<Testing />} />

          <Route path="docs" element={<Docs />}>

            <Route path="introduction" element={<Introduction />} />
            <Route path="button" element={<Button />} />
            <Route path="cards" element={<Cards />} />
          </Route>

        </Routes>
      </BrowserRouter>

      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    </>
  )
}

export default App
