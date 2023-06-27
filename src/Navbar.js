import { Router } from "react-router-dom";
import {Link} from "react-router-dom"


const Navbar = () =>{
    return(
        <nav className= "navbar">
            <h1>Omar's Portfolio</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">Projects</Link>
                <Link to="/">Reflection</Link>
            </div>

        </nav>
    
    )

}

export default Navbar;