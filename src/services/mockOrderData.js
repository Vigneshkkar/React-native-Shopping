import React from 'react';

import Apple from '../assets/images/products/Apple.svg';
import Avacado from '../assets/images/products/Avacado.svg';

const mockOrderData = [
  {
    orderNumber: 'FK009876',
    status: 0,
    eta: 5,
    total: 490,
    key: '1',
    items: [
      {
        name: 'Apple',
        image: <Apple />,
        price: 60,
        unit: 'Kg',
        quantity: 2,
      },
      {
        name: 'Avacado',
        image: <Avacado />,
        price: 106,
        unit: 'Kg',
        quantity: 3,
      },
    ],
  },
  {
    orderNumber: 'FK009876',
    status: 1,
    eta: 5,
    total: 490,
    key: '2',
    items: [
      {
        name: 'Apple',
        image: <Apple />,
        price: 60,
        unit: 'Kg',
        quantity: 2,
      },
      {
        name: 'Avacado',
        image: <Avacado />,
        price: 106,
        unit: 'Kg',
        quantity: 3,
      },
    ],
  },
  {
    orderNumber: 'FK009876',
    status: 2,
    eta: 5,
    total: 490,
    key: '3',
    items: [
      {
        name: 'Apple',
        image: <Apple />,
        price: 60,
        unit: 'Kg',
        quantity: 2,
      },
      {
        name: 'Avacado',
        image: <Avacado />,
        price: 106,
        unit: 'Kg',
        quantity: 3,
      },
    ],
  },
  {
    orderNumber: 'FK009876',
    status: 3,
    eta: 5,
    total: 490,
    key: '4',
    items: [
      {
        name: 'Apple',
        image: <Apple />,
        price: 60,
        unit: 'Kg',
        quantity: 2,
      },
      {
        name: 'Avacado',
        image: <Avacado />,
        price: 106,
        unit: 'Kg',
        quantity: 3,
      },
    ],
  },
  {
    orderNumber: 'FK009876',
    status: 0,
    eta: 5,
    total: 490,
    key: '5',
    items: [
      {
        name: 'Apple',
        image: <Apple />,
        price: 60,
        unit: 'Kg',
        quantity: 2,
      },
      {
        name: 'Avacado',
        image: <Avacado />,
        price: 106,
        unit: 'Kg',
        quantity: 3,
      },
    ],
  },
  {
    orderNumber: 'FK009876',
    status: 0,
    eta: 5,
    total: 490,
    key: '6',
    items: [
      {
        name: 'Apple',
        image: <Apple />,
        price: 60,
        unit: 'Kg',
        quantity: 2,
      },
      {
        name: 'Avacado',
        image: <Avacado />,
        price: 106,
        unit: 'Kg',
        quantity: 3,
      },
    ],
  },
];
export default mockOrderData;
