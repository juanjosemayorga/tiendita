import React from "react";
import { products } from "../../../../data/products";
import { OffersCard } from "../OffersCard/OffersCard";
import "./OffersContainer.css";

export const OffersContainer = () => {
  return (
    <section className="slider">
      <div className="slider-container">
          {
            products.map((product) => (
              <div
                className="slider-slide"
                key={product.id}>
                <OffersCard {...product} />
              </div>
            ))
          }

        {/* <div className="slider-slide">
          <OffersCard />
        </div>

        <div className="slider-slide">
          <OffersCard />
        </div>

        <div className="slider-slide">
          <OffersCard />
        </div> */}
      </div>
    </section>
  );
};
