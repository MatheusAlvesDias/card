import React from 'react'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
const Pagination = (props) => {

 const {page, totalPages, onLeftClick, onRightClick} = props

  return (
    <div className='pagination-container'>
        <button onClick={onLeftClick}><AiFillCaretLeft/>Voltar</button>
        <div>{page} de {totalPages}</div>
        <button onClick={onRightClick}>Avançar<AiFillCaretRight/></button>
        
    </div>
  )
}

export default Pagination