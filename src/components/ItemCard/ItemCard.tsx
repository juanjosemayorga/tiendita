import PropTypes from 'prop-types'
import { Product } from '../../data/interfaces'
import { ItemCardPrice } from './ItemCardPrice/ItemCardPrice';
import './ItemCard.css'

export const ItemCard = (product: Product) => {

  const { disccount, image, name, price, unit } = product;
  const hasDisccount: boolean = disccount > 0

  return (
    <div className="item-card-container">
      <div className="item-card-container__disccount">
        <p className={`item-card-container__disccount-label ${hasDisccount}`}>
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
      <ItemCardPrice
        hasDisccount={hasDisccount}
        disccount={disccount}
        price={price}
        unit={unit}
      />
      <p className="item-card-container__description-text">
        {name}
      </p>
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