import LIMON from '../assets/images/Name=Limon.jpg'
import TOMATE from '../assets/images/Name=Tomate.jpg'
import AGUACATE from '../assets/images/Name=Aguacate.jpg'
import NOPAL from '../assets/images/Name=Nopal.jpg'
import TOMATE_VERDE from '../assets/images/Name=Tomate verde.jpg'
import COCA_COLA from '../assets/images/Name=Cocacola.jpg'
import COCA_COLA_SIN_AZUCAR from '../assets/images/Name=Cocacola sin azucar.jpg'

import NARANJA from '../assets/images/Name=Naranja.jpg'
import JITOMATE_BOLA from '../assets/images/Name=Jitomate Bola.jpg'
import MANZANA_GOLDEN from '../assets/images/Name=Manzana Golden.jpg';

import PECHUGA_PAVO from '../assets/images/Name=Pechuga de pavo.jpg'
import PAN_BIMBO from '../assets/images/Name=Pan Bimbo.jpg'
import MAYONESA_MCCORMIC from '../assets/images/Name=Mc Cormick Mayonesa.jpg';
import PASTA_COLGATE from '../assets/images/Name=Colgate.jpg'
import HUEVOS_SAN_JUAN from '../assets/images/Name=Huevos.jpg'
import LIMPIADOR_FABULOSO from '../assets/images/Name=Fabuloso.jpg'


import { Product } from './interfaces';

export const products: Product[] = [
  {
    id: 1,
    disccount: 32,
    image: LIMON,
    price: 39.9,
    name: "Limon con semilla",
    unit: "Kg",
    popular: false,
  },
  {
    id: 2,
    disccount: 32,
    image: TOMATE,
    price: 32.9,
    name: "Tomate",
    unit: "Kg",
    popular: false,
  },
  {
    id: 3,
    disccount: 18,
    image: AGUACATE,
    price: 39.9,
    name: "Aguacate Hass",
    unit: "Kg",
    popular: false,
  },
  {
    id: 4,
    disccount: 13,
    image: NOPAL,
    price: 25.8,
    name: "Nopal Limpio",
    unit: "Kg",
    popular: false,
  },
  {
    id: 5,
    disccount: 8,
    image: TOMATE_VERDE,
    price: 24.9,
    name: "Tomate verde sin cáscara",
    unit: "Kg",
    popular: false,
  },
  {
    id: 6,
    disccount: 7,
    image: COCA_COLA_SIN_AZUCAR,
    price: 28,
    name: "Coca-Cola Sin Azúcar",
    unit: "3 Lts",
    popular: false,
  },
  {
    id: 7,
    disccount: 7,
    image: COCA_COLA,
    price: 14,
    name: "Coca-Cola",
    unit: "600 Ml",
    popular: true,
  },
  {
    id: 8,
    disccount: 0,
    image: NARANJA,
    price: 19.8,
    name: "Naranja",
    unit: "1kg",
    popular: false,
  },
  {
    id: 9,
    disccount: 0,
    image: JITOMATE_BOLA,
    price: 16,
    name: "Jitomate",
    unit: "1kg",
    popular: false,
  },
  {
    id: 10,
    disccount: 0,
    image: MANZANA_GOLDEN,
    price: 23.5,
    name: "Manzana",
    unit: "1kg",
    popular: false,
  },
  {
    id: 11,
    disccount: 0,
    image: PECHUGA_PAVO,
    price: 62.5,
    name: "San Rafael pechuga de pavo",
    unit: "250g ($0.25/gr)",
    popular: true,
  },
  {
    id: 12,
    disccount: 0,
    image: PAN_BIMBO,
    price: 38.9,
    name: "Bimbo Pan Blanco Grande",
    unit: "680g ($0.6/gr)",
    popular: true,
  },
  {
    id: 13,
    disccount: 0,
    image: MAYONESA_MCCORMIC,
    price: 48.5,
    name: "Mc Cormick Mayonesa",
    unit: "507g ($0.1/gr)",
    popular: true,
  },
  {
    id: 14,
    disccount: 0,
    image: PASTA_COLGATE,
    price: 35.5,
    name: "Colgate Pasta Dental Triple Familiar 2 U",
    unit: "125ml ($0.28/ml)",
    popular: true,
  },
  {
    id: 15,
    disccount: 0,
    image: HUEVOS_SAN_JUAN,
    price: 37.5,
    name: "Huevos San Juan",
    unit: "18 Und ($2.08/u)",
    popular: true,
  },
  {
    id: 16,
    disccount: 0,
    image: LIMPIADOR_FABULOSO,
    price: 26,
    name: "Fabuloso Limpiador Antibacterial",
    unit: "2L ($18.95/l)",
    popular: true,
  },
];