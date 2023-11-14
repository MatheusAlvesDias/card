import './Pagination.css'
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'
const Pagination = (props) => {

 const {page, totalPages, onLeftClick, onRightClick} = props

  return (
    <div className='pagination-container'>
        <button  className="btn-page back" onClick={onLeftClick}><AiFillCaretLeft/>Voltar</button>
        <div className='center-page'>{page} de {totalPages}</div>
        <button  className="btn-page next" onClick={onRightClick}>Avançar<AiFillCaretRight/></button>
        
    </div>
  )
}

export default Pagination