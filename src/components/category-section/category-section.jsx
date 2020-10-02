import React from 'react'
import './category-section.scss'

import AliceCarousel from 'react-alice-carousel'

import { Link } from 'react-router-dom'
import { Product } from 'components/product/product'
import { AngleRightIcon } from 'components/icons/icons'
type Props = {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
};
type Product = {
  image: string,
  price: number,
  sale: number,
  title: string,
  status: {
    type: string,
    content: string,
  },
}

export const CategorySection = ({title, link, dataProduct, isSlider}: Props)=> {
  
  return(
    <div className="container">
           <div className="category-section section-wrap align-items-center">
             <h2 className="title">Sản phẩm mới nhất</h2>
             <a href="see-all">Xem tất cả
                  <img src={AngleRightIcon} alt=""/>
             </a>
            </div>
            
    </div>
    
  )
  return <div>CategorySection</div>;
}
