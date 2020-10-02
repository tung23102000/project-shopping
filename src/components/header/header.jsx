import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Logo from "assets/images/logo.png";
import User from "assets/images/user.png";
import {
  SearchIcon,
  CartIcon,
  CaretDownIcon,
  BarsIcon,
  CloseIcon,
  PlusIcon,
} from "components/icons/icons";

export const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className="header">
      <div class="header-wrap row section-wrap d-flex align-items-center justify-content-between">
        <div className="header-logo">
          <div className="header-nav-btn">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="header-location">
          <p>Chọn kho giao hàng</p>
          <div className="location d-flex align-item-center justify-content-between">
            <select className="box">
              <option value="0">Hà Nội</option>
              <option value="1">Tp.HCM</option>
              <option value="2">Hải Phòng</option>
              <option value="3">Đà Nẵng</option>
              <option value="4">Cần Thơ</option>
            </select>
          </div>
        </div>
        <div className="header-search">
          <SearchIcon></SearchIcon>
          <input type="text" placeholder="Tìm kiếm" />
        </div>
        <div className="sign-in-up">
          <a href="/">
            <span>Đăng nhập </span>
          </a>
          <span>/</span>
          <a href="/">
            <span> Đăng ký</span>
          </a>
        </div>
        <div className="header-cart d-flex align-item-end">
          <CartIcon></CartIcon>
          <span>(0)</span>
        </div>
      </div>
      <div className="header-wrap list-menu">
        <ul className="section-wrap d-flex align-items-center justify-content-between">
          <li>
            <a href="/">Giày</a>
          </li>
          <li>
            <a href="/">Túi xách </a>
          </li>
          <li>
            <a href="/">Balo</a>
          </li>
          <li>
            <a href="/">Ví bóp</a>
          </li>
          <li>
            <a href="/">Dép & Guốc</a>
          </li>
          <li>
            <a href="/">Phụ kiện</a>
          </li>
          <li>
            <a href="/">Giftcard</a>
          </li>
          <li>
            <a href="/">Sale off</a>
          </li>
          <li>
            <a href="/">New arrial</a>
          </li>
          <li>
            <a href="/">Summer Kisses</a>
          </li>
          <li>
            <a href="/">Tin tức</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
