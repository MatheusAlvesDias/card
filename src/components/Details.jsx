import { useEffect } from 'react'
import './Details.css'

const Details = (props) => {
  const {see, item, close } = props



  return (
    <div className='modal-container' onClick={close} style={{ display: see ? 'grid' : 'none' }}>
      <div className='modal-body'  >
        <div className="imagem-container" >
        <h2 className="titulo">{item.name} #{item.id}</h2>
          <img src={item.imagem} alt="" className='imagen-detalle' />
          <section>
            {item.types?.map((type, index) => (<span id={type} key={index} className="tag-type">{type}</span>))}
          </section>
        </div>
        <div className="data">
          
          <h3 className="titulo-seccion">Habilidades</h3>
          {item.abilites?.map((abilite, index) => (<span key={index} className="tag">{abilite}</span>))}
          <h3 className="titulo-seccion">Status</h3>
              <div className='stats'>
              {item.stats?.map((stat, index) => (
            <section key={index} className="puntos" >
              <span className='stats-number'>{stat.base}</span>
              <span>{stat.name}</span>
            </section>)
            )}
          
              </div>
        </div>
      </div>

    </div>
  )
}

export default Details