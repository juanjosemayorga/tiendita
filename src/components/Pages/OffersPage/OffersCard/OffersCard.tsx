import PropTypes from 'prop-types'
import './OffersCard.css'

export const OffersCard = (props: any) => {
  return (
    <div>
      <p>32% dto.</p>
      <figure>
        {/* img */}
      </figure>
      <article>
        <p>$26.82/kg (precio rebajado)</p>
        <p>$39.9/kg (precio normal)</p>
      </article>
      <p>Limón con semilla</p>
      <button>Agregar</button>
    </div>
  )
}

OffersCard.propTypes = {

}
