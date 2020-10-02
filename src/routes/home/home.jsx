import React from 'react'
import './home.scss'
import Gif from 'assets/images/banner-gif.gif'
import mockupDataDiscount from 'data/mockupDataDiscount'
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataHot from "data/mockupDataHot";
import {HomepageCarousel} from "components/homepage-carousel/homepage-carousel"

const Homepage = ({ mockupDataNewest }: any) => {
  console.log(mockupDataDiscount);
  return(
    
       <div className="homepage">
           <HomepageCarousel></HomepageCarousel>
           <div className="hot-trend section-wrap">
             <h2 className="title">hot trend 2020</h2>
             <img src={Gif} alt=""/>
           </div>
           {/* <div className="category-section section-wrap align-items-center">
             <h2 className="title">Sản phẩm mới nhất</h2>
             <a href="see-all">Xem tất cả
                  <img src="" alt=""/>
             </a>
           </div> */}
           <CategorySection title="SẢN PHẨM MỚI NHẤT" link="/category/san-pham-moi-nhat" dataProduct={mockupDataNewest} />
      <CategorySection title="SẢN PHẨM KHUYẾN MÃI" link="/category/san-pham-khuyen-mai" dataProduct={mockupDataDiscount} isSlider={true} />
      <CategorySection title="SẢN PHẨM BÁN CHẠY" link="/category/san-pham-ban-chay" dataProduct={mockupDataBestSeller} isSlider={true} />
      <CategorySection title="SẢN PHẨM NỔI BẬT" link="/category/san-pham-noi-bat" dataProduct={mockupDataHot} isSlider={true} />
       </div>
       
    
  );

  
}

const mapStateToProps = (state: any) => ({
  mockupDataNewest: state.mockupDataCategory,
})

export default connect(mapStateToProps)(Homepage);