import React from 'react'
import { useState, useEffect } from 'react'
import SearchForm from '../components/SearchForm'
import axios from 'axios'
import CardPokemon from '../components/CardPokemon'
import './Home.css'
import usePokemon from '../hooks/usePokemon'
import Pagination from '../components/Pagination'


const Home = (props) => {

    // const { page, totalPages, onLeftClick, onRightClick} = props
    const { pokemons, setPage, page, totalPages } = usePokemon()
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



return (
    <div className='Home'>
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
        <div className='card-container'>
            {pokemons.map((item) =>
            (<CardPokemon key={item.id} data={item} />
            ))}
        </div>
    </div>
)
}

export default Home