import LIMON from '../assets/images/Name=Limon.jpg'
import TOMATE from '../assets/images/Name=Tomate.jpg'
import AGUACATE from '../assets/images/Name=Aguacate.jpg'
import NOPAL from '../assets/images/Name=Nopal.jpg'
import TOMATE_VERDE from '../assets/images/Name=Tomate verde.jpg'
import COCA_COLA from '../assets/images/Name=Cocacola.jpg'
import COCA_COLA_SIN_AZUCAR from '../assets/images/Name=Cocacola sin azucar.jpg'

import { Product } from './interfaces';

export const products: Product[] = [
  {
    id: 1,
    disccount: 32,
    image: LIMON,
    price: 39.9,
    name: 'Limon con semilla',
    unit: 'Kg'
  },
  {
    id: 2,
    disccount: 32,
    image: TOMATE,
    price: 32.9,
    name: 'Tomate',
    unit: 'Kg'
  },
  {
    id: 3,
    disccount: 18,
    image: AGUACATE,
    price: 39.9,
    name: 'Aguacate Hass',
    unit: 'Kg'
  },
    {
    id: 4,
    disccount: 13,
    image: NOPAL,
    price: 25.8,
    name: 'Nopal Limpio',
    unit: 'Kg'
  },
    {
    id: 5,
    disccount: 8,
    image: TOMATE_VERDE,
    price: 24.9,
    name: 'Tomate verde sin cáscara',
    unit: 'Kg'
  },
    {
    id: 6,
    disccount: 7,
    image: COCA_COLA_SIN_AZUCAR,
    price: 28,
    name: 'Coca-Cola Sin Azúcar',
    unit: '3 Lts',
  },
    {
    id: 7,
    disccount: 7,
    image: COCA_COLA,
    price: 14,
    name: 'Coca-Cola',
    unit: '600 Ml',
  },
]