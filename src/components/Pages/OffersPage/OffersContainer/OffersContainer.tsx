import { Product } from '../../../../data/interfaces';
import { products } from "../../../../data/products";
import { ItemCard } from "../../../ItemCard/ItemCard";
import "./OffersContainer.css";

export const OffersContainer = () => {
  return (
    <section className="slider">
      <div className="slider-container">
          {
            products.filter((product: Product) => product.disccount > 0)
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
};
