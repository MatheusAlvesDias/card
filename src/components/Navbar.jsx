import { Link, NavLink } from "react-router-dom"
import { SiPokemon } from 'react-icons/si'
import './Navbar.css'



const Navbar = () => {
    return (

        <nav className="navbar">
            <Link to={"/"}><SiPokemon className="icon" /></Link>
            <ul>
                <li><span>Favoritos</span></li>
                <li><NavLink to={"/"} className="btn-home">Home</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar