import { Link, NavLink } from "react-router-dom"
import { SiPokemon } from 'react-icons/si'
import './Navbar.css'
import { BsSearch } from 'react-icons/bs'


const Navbar = () => {
    return (

        <nav className="navbar">
            <div>
                <img src="../../public/pngwing.com.png" height='100' width='200' alt="pokemon.logo" />
            </div>
            <div className='search-form'>
        <form>
            <input type="text"  name='search' className='search-text' placeholder='Pesquisar'/>
        </form>
        <button ><BsSearch/></button>
    </div>
        </nav>
    )
}

export default Navbar