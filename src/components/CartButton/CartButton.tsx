import './CartButton.css'
import ShoppingCart from '../../assets/icons/ShoppingCart';

export const CartButton = () => {
  return (
    <div className="cart-container">
      <div>
        <ShoppingCart />
      </div>
      <div>
        <p className="cart-container__number">5</p>
      </div>
    </div>
  )
}
