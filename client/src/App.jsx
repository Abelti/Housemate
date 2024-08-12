import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./pages/IndexPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import UserPage from "./pages/UserPage"
import RegisterPage from "./pages/RegisterPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
