import { Card, Tag, Typography } from 'antd';
import  { ShoppingCartOutlined } from '@ant-design/icons';
import { ProductsType } from '../types/types';
const { Title } = Typography;

type Props = {
    product: ProductsType;
};

const ProductCard = ({ product }: Props) => {
  const {name, isOnSale, price, discountPrice, installmentPrice, color} = product;

  return (
    <Card 
    actions={[<ShoppingCartOutlined key = 'shop' />]}
    size='small'
    style={{height: '230px'}}
    hoverable
      title={isOnSale ?  
        <div className='title-wrapper'>
          <Tag color="red">Акция!</Tag> 
          <Title level={4} className='card-title'>{name}</Title> 
        </div> 
        : 
        <Title level={4}>{name}</Title>}
    >
      {color && <Typography>Цвет: {color}</Typography>}
      {'size' in product && <Typography>Размер: {product.size.join(', ')}</Typography>}
      {'power' in product && <Typography>Мощность: {product.power}</Typography>}
      {'expirationDate' in product && (
        <Typography>Срок годности: {product.expirationDate}</Typography>
      )}
      {'productionDate' in product && (
        <Typography>Дата производства: {product.productionDate}</Typography>
      )}
      <div className='price-box-wrapper'>
        <Typography>Цена:</Typography>
        {isOnSale ? 
          <div className='price-wrapper'>
            <Typography className='old-price'>{price}</Typography>
            <Typography className='price'>{discountPrice}</Typography>
          </div>
        : 
          <Typography className='price'>{price}</Typography>
        }
      </div>
      {installmentPrice && (
        <Typography>Стоимость в месяц: {installmentPrice}</Typography>
      )}
    </Card>
  );
};

export default ProductCard;

