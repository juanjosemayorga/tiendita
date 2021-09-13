import PropTypes from 'prop-types'
import './OffersCard.css'
import LIMON from '../../../../assets/images/Name=Limon.jpg'
import { Product } from '../../../../data/interfaces';

export const OffersCard = (product: Product) => {

  const { disccount, image, name, price } = product;

  return (
    <div className="offers-card-container">
      <div className="offers-card-container__disccount">
        <p className="offers-card-container__disccount-label">{disccount}% dto.</p>
      </div>
      <figure className="offers-card-container__figure-product">
        <img
          className="offers-card-container__figure-product-image"
          src={image}
          alt={name}
        />
      </figure>
      <article className="offers-card-container__prices-container">
        <p className="offers-card-container__prices-container--low-price">
          $26.82/kg
        </p>
        <p className="offers-card-container__prices-container--normal-price">
          ${price}/kg
        </p>
      </article>
      <p className="offers-card-container__description-text">
        {name}
      </p>
      <button className="offers-card-container__add-button">Agregar</button>
    </div>
  );
};

OffersCard.propTypes = {

}
