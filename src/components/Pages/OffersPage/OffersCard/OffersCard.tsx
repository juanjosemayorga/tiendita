import PropTypes from 'prop-types'
import './OffersCard.css'
import LIMON from '../../../../assets/images/Name=Limon.jpg'

export const OffersCard = (props: any) => {
  return (
    <div className="offers-card-container">
      <div className="offers-card-container__disccount">
        <p className="offers-card-container__disccount-label">32% dto.</p>
      </div>
      <figure className="offers-card-container__figure-product">
        <img
          className="offers-card-container__figure-product-image"
          src={LIMON}
          alt="Limón" />
      </figure>
      <article className="offers-card-container__prices-container">
        <p
          className="offers-card-container__prices-container--low-price">
          $26.82/kg
        </p>
        <p
          className="offers-card-container__prices-container--normal-price">
          $39.9/kg
        </p>
      </article>
      <p className="offers-card-container__description-text">
        Limón con semilla
      </p>
      <button className="offers-card-container__add-button">
        Agregar
      </button>
    </div>
  )
}

OffersCard.propTypes = {

}
