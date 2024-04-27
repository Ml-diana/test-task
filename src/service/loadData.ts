import { DELAY } from "../const/const";
import { productsMocks } from "../mocks/productsMocks";
import { ProductsType } from "../types/types";

export const fetchImitate = () => {
    return new Promise<ProductsType[]>(resolve => {
        setTimeout(() => {
            resolve(productsMocks);
        }, DELAY);
    })
  };