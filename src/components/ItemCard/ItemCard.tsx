import PropTypes from 'prop-types'
import { Product } from '../../data/interfaces'
import { calculateDisccount } from '../../helpers/calculateDisccount';
import './ItemCard.css'

export const ItemCard = (product: Product) => {

  const { disccount, image, name, price, unit } = product;

  return (
    <div className="item-card-container">
      <div className="item-card-container__disccount">
        <p className="item-card-container__disccount-label">
          {disccount}% dto.
        </p>
      </div>
      <figure className="item-card-container__figure-product">
        <img
          className="item-card-container__figure-product-image"
          src={image}
          alt={name}
        />
      </figure>
      <article className="item-card-container__prices-container">
        <p className="item-card-container__prices-container--low-price">
          {calculateDisccount(disccount, price)}/{unit}
        </p>
        <p className="item-card-container__prices-container--normal-price">
          ${price}/{unit}
        </p>
      </article>
      <p className="item-card-container__description-text">{name}</p>
      <button className="item-card-container__add-button">Agregar</button>
    </div>
  );
};

ItemCard.propTypes = {
  disccount: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};