import { Cart } from '../Cart/Cart'
import './Header.css'

export const Header = () => {
  return (
    <div className="container header-container">
      <div className="row">
        <div className="col-6">
          <h3 className="header-container__logo-text">Tiendita</h3>
        </div>
        <div className="col-6">
          <Cart />
        </div>
      </div>
    </div>
  )
}
