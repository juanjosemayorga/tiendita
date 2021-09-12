import { OffersContainer } from '../../components/Pages/OffersPage/OffersContainer/OffersContainer'
import './OffersPage.css'

export const OffersPage = () => {
  return (
    <div className="offers-page-container">
      <h3 className="offers-page-container__subtitle">Ofertas</h3>
      <OffersContainer />
    </div>
  )
}
