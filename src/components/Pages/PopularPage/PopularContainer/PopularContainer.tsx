import { Product } from '../../../../data/interfaces';
import { products } from '../../../../data/products';
import { ItemCard } from '../../../ItemCard/ItemCard';
import './PopularContainer.css';

export const PopularContainer = () => {
  return (
    <section className="slider">
      <div className="slider-container">
        {
          products
            .filter((product: Product) => product.popular)
            .map((product: Product) => (
              <div
                className="slider-slide"
                key={product.id}>
                <ItemCard {...product} />
              </div>
          ))
        }
      </div>
    </section>
  );
}
