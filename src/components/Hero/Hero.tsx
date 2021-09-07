import { ALT_IMAGE_HERO, TITLE } from './Constants'
import HERO_IMG from '../../assets/images/banner.png'
import './Hero.css'

export const Hero = () => {
  return (
    <figure className="hero-container">
      <img
        className="hero-container__image"
        src={HERO_IMG}
        alt={ALT_IMAGE_HERO} />
      <h1 className="hero-container__title">{TITLE}</h1>
    </figure>
  )
}
