import { calculateDisccount } from '../../../helpers/calculateDisccount';
import './ItemCardPrice.css'

interface PriceProps {
  hasDisccount: boolean;
  price: number;
  unit: string;
  disccount: number;
}

export const ItemCardPrice = (prices: PriceProps) => {

  const { hasDisccount, disccount, price, unit } = prices;

  return (
    <article className="item-card-container__prices-container">
      {hasDisccount ? (
        <>
          <p className="item-card-container__prices-container--low-price">
            {calculateDisccount(disccount, price)}/{unit}
          </p>
          <p className="item-card-container__prices-container--normal-price">
            ${price}/{unit}
          </p>
        </>
      ) : (
        <p className="item-card-container__prices-container--low-price">
          ${price}
        </p>
      )}
    </article>
  );
}
