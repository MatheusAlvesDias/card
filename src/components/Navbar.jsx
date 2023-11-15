import './Navbar.css'
import { BsSearch } from 'react-icons/bs'
import './SearchForm.css'

const Navbar = ({search, setSearch, findPokemon}) => {


    return (

        <nav className="navbar">
            <div>
                <img src="/pokelogo.png" height='100' width='200' alt="pokemon.logo" />
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
