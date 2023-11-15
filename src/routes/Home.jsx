import React, { useState } from 'react'
import CardPokemon from '../components/CardPokemon'
import './Home.css'
import usePokemon from '../hooks/usePokemon'
import Pagination from '../components/Pagination'
import Details from '../components/Details'
import Navbar from '../components/Navbar'


const Home = () => {
    const { pokemons, setPage, page, totalPages, loading, setLoading , searchPokemon } = usePokemon()
    const [search, setSearch] = useState("")
    const [ see, setSee ] = useState({ see: false, item: {} })
    
    
    const seePokemon = (item) => setSee({ see: true, item })
    const notSeePokemon = () => {
        setSee({ see: false, item: {} })
        setSearch("")

    }

    
    
    
    
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
    
    const findPokemon =  async(e) => {
        e.preventDefault()

        const item = await searchPokemon(search)
        if(!search) return

        setSee({see: true, item})
    }


    return (
        <> 
        <Navbar search={search} setSearch={setSearch} findPokemon={findPokemon}/>
        <div className='home'>
            
            <Details {...see} close={notSeePokemon} />
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
            <Pagination
                    page={page + 1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                    se
                />

        </div>
        </>
    )
}

export default Home