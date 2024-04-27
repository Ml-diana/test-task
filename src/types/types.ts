 
 interface IBase { 
    id: number;
    type: string;
    name: string;
    price: number;
    isOnSale: boolean;
    discountPrice?: number;
    installmentPrice?: number;
    color?: string; 
 };
 
 export interface IClothing  extends IBase { 
    size: string[];
 };

 export interface IElectronic  extends IBase { 
    power: number;
 };

 export interface IFood  extends IBase { 
    expirationDate: string;
    productionDate: string;
 };

 export interface IThings  extends IBase { 
    productionDate: string;
 };

 export type ProductsType = IClothing | IElectronic | IFood | IThings;
