import {  Tag, Typography } from 'antd';
const { Title  } = Typography;

type Props = {
    isOnSale: boolean;
    name: string;
};

const CardTitle = ({isOnSale, name}: Props) => {

    if (!isOnSale) {
        return <Title level={4}>{name}</Title>
    };

    return (
    <div className='title-wrapper'>
        <Tag color="red">Акция!</Tag> 
        <Title level={4} className='card-title'>{name}</Title> 
    </div> 
    );
}

export default CardTitle;