import { ProductsType } from "../types/types";

export const productsMocks: ProductsType[] =  [
    {
      "id": 1,
      "name": "trousers",
      "price": 500,
      "discountPrice": 200,
      "installmentPrice": 41.77,
      "type": "clothing",
      "isOnSale": true,
      "size": ["S", "M", "L"],
      "color": "white"
    },
    {
      "id": 2,
      "name": "T-shirt",
      "price": 100,
      "discountPrice": 50,
      "installmentPrice": 8.33,
      "type": "clothing",
      "isOnSale": true,
      "size": ["S", "M", "L"],
      "color":  "blue"
    },
    {
      "id": 3,
      "name": "phone",
      "price": 1000,
      "installmentPrice": 83.33,
      "type": "electronic",
      "isOnSale": false,
      "power": 100,
      "color": "black"
    },
    {
      "id": 4,
      "name": "iron",
      "price": 600,
      "installmentPrice": 50,
      "type": "electronic",
      "isOnSale": false,
      "power": 200,
      "color": "grey"
    },
    {
      "id": 5,
      "name": "milk",
      "price": 10,
      "installmentPrice": 5,
      "type": "food",
      "isOnSale": false,
      "expirationDate": "2024-04-12",
      "productionDate": "2024-04-01"
    },
    {
      "id": 6,
      "name": "book",
      "price": 40,
      "installmentPrice": 5,
      "type": "things",
      "isOnSale": false,
      "productionDate": "2024-04-01",
      color: 'green'
    }
  ];