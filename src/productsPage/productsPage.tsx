import { List } from 'antd';
import ProductCard from '../productCard/productCard';
import { useEffect, useState } from 'react';
import { ProductsType } from '../types/types';
import { fetchImitate } from '../service/loadData';
import Loading from '../loading/loading';

const ProductsPage = () => {
    const [productsData, setProductsData] = useState<ProductsType[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetchImitate().then((products: ProductsType[]) => {
            setProductsData(products);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <Loading />;
    };

    return (
            <List
                grid={{column: 8, gutter: 4}}
                dataSource={productsData}
                className='list'
                renderItem={product => (
                    <List.Item>
                        <ProductCard product={product} />
                    </List.Item>
                )}
            />

    );
}

export default ProductsPage;