import { Link, NavLink } from "react-router-dom"
import { SiPokemon } from 'react-icons/si'
import './Navbar.css'
import { BsSearch } from 'react-icons/bs'


const Navbar = ({search, setSearch, findPokemon}) => {


    return (

        <nav className="navbar">
            <div>
                <img src="public/pokelogo.png" height='100' width='200' alt="pokemon.logo" />
            </div>
            <div className='search-form'>
        <form onSubmit={findPokemon}>
            <input type="text"  name='search' className='search-text' placeholder='Pesquisar'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        <button type="submit" ><BsSearch/></button>
        </form>
    </div>
        </nav>
    )
}

export default Navbar
