import { Typography } from 'antd';

type Props = {
    isOnSale: boolean;
    price: number;
    discountPrice: number | undefined;
    installmentPrice: number | undefined;
};

const ProductPrice = ({isOnSale, price, discountPrice, installmentPrice}: Props) => {
    return (
        <>
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
                <Typography>
                    Стоимость в месяц: {installmentPrice}
                </Typography>
            )}
        </>
    );
}

export default ProductPrice;