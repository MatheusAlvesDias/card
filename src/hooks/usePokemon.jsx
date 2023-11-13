import React from 'react'
import { useEffect, useState } from 'react'



const UrlEndpoint = 'https://pokeapi.co/api/v2/pokemon/'
const usePokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(0)
 const itensPerPage = 25



  const fetchPokemon = async (url) => {
    const response = await fetch(url)
    const poke = await response.json()
    
    const abilites = poke.abilities.map((e) => (e.ability.name))
    const stats = poke.stats.map(f => { return { name: f.stat.name, base: f.base_stat } })
    const types = poke.types.map((g) => (g.type.name))


   
    return {
      id: poke.id,
      name: poke.name,
      abilites,
      stats,
      types,
    }
  }


  const getPokemons = async (limit= 50, offset = 0) => {
    // Limite de pokemons Animados {649}

    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const listPokemons = await response.json()
    const { next, results } = listPokemons
    setTotalPages(Math.ceil(639 / itensPerPage))
    const newPokemon = await Promise.all(
      results.map((pokemon) => fetchPokemon(pokemon.url))

    )

    
    return { next, newPokemon }
  }
  const gettingPokemons = async () => {
    const { next, newPokemon,  } = await getPokemons(itensPerPage, itensPerPage *page)
    
    setPokemons(newPokemon)





  }

  useEffect(() => {

    gettingPokemons()

  }, [page])

  return { pokemons, setPage, totalPages, page }
}
export default usePokemon