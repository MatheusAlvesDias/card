import React, { useState } from 'react'
import SearchForm from '../components/SearchForm'
import CardPokemon from '../components/CardPokemon'
import './Home.css'
import usePokemon from '../hooks/usePokemon'
import Pagination from '../components/Pagination'
import Details from '../components/Details'


const Home = () => {

    const { pokemons, setPage, page, totalPages, loading, setLoading } = usePokemon()
    const onLeftClickHandler = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const onRightClickHandler = () => {
        if (page + 1 !== totalPages) {
            setPage(page + 1)
        }
    }
    
    const [ see, setSee ] = useState({ see: false, item: {} })
    const seePokemon = (item) => setSee({ see: true, item })
    const notSeePokemon = () => setSee({ see: false, item: {} })

    return (
        <div className='Home'>
            <Details {...see} close={notSeePokemon} />
            <SearchForm />
            <div className='pokedex-header'>
                <Pagination
                    page={page + 1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                    se
                />
            </div>

            {loading ? (
                <div className='loading'><span>Carregando...</span></div>) : (
                <div className='card-container'>
                    {pokemons.map((item) =>
                    (<CardPokemon key={item.id} data={item} seePokemon={() => seePokemon(item)}/>
                    ))}
                </div>
            )}
           

        </div>
    )
}

export default Home