import { PopularContainer } from '../../components/Pages/PopularPage/PopularContainer/PopularContainer'
import './PopularPage.css'

export const PopularPage = () => {
  return (
    <div className="popular-page-container">
      <h3 className="popular-page-container__subtitle">Los más populares</h3>
      <PopularContainer />
    </div>
  );
}
