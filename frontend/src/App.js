import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"
import Apply from "./pages/Apply"
import Applications from "./pages/Applications"
import EditJob from "./pages/EditJob"

import "./styles.css"

function App() {

return (

<Router>

<div className="app">

<Header/>

<div className="container">

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/about" element={<About/>} />

<Route path="/contact" element={<Contact/>} />

<Route path="/admin" element={<Admin/>} />

<Route path="/apply" element={<Apply/>} />

<Route path="/applications" element={<Applications/>} />

<Route path="/edit/:id" element={<EditJob/>} />

</Routes>

</div>

<Footer/>

</div>

</Router>

)

}

export default App