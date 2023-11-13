import { useState, useEffect } from "react"
import './CardPokemon.css'
import {MdCatchingPokemon} from 'react-icons/md'

const CardPokemon = ({ data }) => {


    const pokemonimage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`

    return (
        <div className="card-pokemon" id={data.types[0]}>
            <div className="card-header">
            <span className="card-title">{data.name}</span>
            <span className="hp_image">hp <b>{data.stats[0].base}</b></span>
            </div>
            <div className="card-image">
                <img src={pokemonimage} className="pokemon_image" />
            </div>
            <div className="card-body">
            <span className="abilites_name">Habilidades</span>
                <div className="abilities">
                    <span>{data.abilites[0]}</span>
                    <span>{data.abilites[1]}</span>
                </div>
                <div className="types-container">
                    {data.types?.map((type, index) => ( <div key={index} className="type" id={type}> <span>{type}</span></div>))}
            
                </div>
                <div className="actions">
                <button className="pokeball"><MdCatchingPokemon/></button>
                <button className="btn-card">Detalhes...</button>
                </div>
            </div>
        </div>


    )
}

export default CardPokemon