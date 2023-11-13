import { BsSearch } from 'react-icons/bs'
import './SearchForm.css'

const SearchForm = () => {
  return (
    <div className='search-form'>
        <form>
            <input type="text"  name='search' className='search-text' placeholder='Pesquisar'/>
        </form>
        <button onClick={(e) => e.preventDefault}><BsSearch/></button>
    </div>
  )
}

export default SearchForm