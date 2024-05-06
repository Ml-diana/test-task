import { Card } from 'antd';
import  { ShoppingCartOutlined } from '@ant-design/icons';
import { ProductsType } from '../types/types';
import CardTitle from './cardTitle';
import ProductPrice from './productPrice';
import ProductSpecifications from './productSpecifications';

type Props = {
    product: ProductsType;
};

const ProductCard = ({ product }: Props) => {
  const {name, isOnSale, price, discountPrice, installmentPrice} = product;

  return (
    <Card 
      actions={[<ShoppingCartOutlined key = 'shop' onClick={() => console.log('добавлено в корзину')}/>]}
      size='small'
      style={{height: '230px'}}
      hoverable
      title={<CardTitle isOnSale={isOnSale} name={name}/>}
    >
      <ProductSpecifications product={product} />
      <ProductPrice isOnSale={isOnSale} price={price} discountPrice={discountPrice} installmentPrice = {installmentPrice}/>
    </Card>
  );
};

export default ProductCard;

