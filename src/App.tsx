import React from 'react';
import ProductsPage from './productsPage/productsPage';
import { Layout, Typography } from 'antd';
import { Footer, Header } from 'antd/es/layout/layout';
import  './style/style.css';

function App() {
  const currentDate = new Date();

  return  (
    <Layout className='layout'>
      <Header>
        <Typography className='header'>Online Shop</Typography>
      </Header>
      <ProductsPage />
      <Footer>© Online Shop {currentDate.getFullYear()}</Footer>
    </Layout>
  );
}

export default App;
