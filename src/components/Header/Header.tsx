import { CartButton } from '../CartButton/CartButton'
import './Header.css'

export const Header = () => {
  return (
    <header className="header-container">
      <h3 className="header-container__logo">Tiendita</h3>
      <div className="header-container__cart-button">
        <CartButton />
      </div>
      <p className="header-container__location">México City Marriot</p>
    </header>
  )
}
