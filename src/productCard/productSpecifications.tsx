import { Typography } from 'antd';
import { ProductsType } from '../types/types';

type Props = {
    product: ProductsType;
};

const ProductSpecifications = ({product}: Props) => {
    return (
        <>
            {product.color && 
                <Typography>
                    Цвет: {product.color}
                </Typography>}
            {'size' in product && 
                <Typography>
                    Размер: {product.size.join(', ')}
                </Typography>}
            {'power' in product && 
                <Typography>
                    Мощность: {product.power}
                </Typography>}
            {'expirationDate' in product && (
                <Typography>
                    Срок годности: {product.expirationDate}
                </Typography>
            )}
            {'productionDate' in product && (
                <Typography>
                    Дата производства: {product.productionDate}
                </Typography>
            )}
        </>
    );
}

export default ProductSpecifications;