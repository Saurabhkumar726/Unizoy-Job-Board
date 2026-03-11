import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Header(){

const [darkMode,setDarkMode] = useState(
localStorage.getItem("theme") === "dark"
)

useEffect(()=>{

if(darkMode){
document.body.classList.add("dark")
document.documentElement.classList.add("dark")
localStorage.setItem("theme","dark")
}else{
document.body.classList.remove("dark")
document.documentElement.classList.remove("dark")
localStorage.setItem("theme","light")
}

},[darkMode])

const toggleTheme = () =>{
setDarkMode(!darkMode)
}

return(

<div className="header">

<h2>Unizoy Job Board</h2>

<div>

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<Link to="/admin">Post Job</Link>
<Link to="/applications">Applications</Link>

<button
className="dark-btn"
onClick={toggleTheme}
>
{darkMode ? "☀ Light" : "🌙 Dark"}
</button>

</div>

</div>

)

}

export default Header