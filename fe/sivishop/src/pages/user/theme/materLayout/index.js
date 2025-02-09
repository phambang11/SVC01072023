import React, { memo } from 'react';
import Header from '../header';
import Footer from '../footer';

const MaterLayout = ({children, ...props}) => {
    
    return (
        <div>
           Sivi SHOP từ trang chủ
           <Header />
           {children}
           <Footer />
        </div>
    );
};

export default memo(MaterLayout);