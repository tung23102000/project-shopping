import React, { useState, useEffect } from 'react'
import './header.scss'
import { Link } from "react-router-dom"
import classNames from 'classnames'

import Logo from 'assets/images/logo.png'
import User from 'assets/images/user.png'
import { SearchIcon, CartIcon, CaretDownIcon, BarsIcon, CloseIcon, PlusIcon } from 'components/icons/icons'

export const Header = () => {

  useEffect(() => {
  }, [])

  return (
    <div className="header">
      Header
    </div>
  )
}
