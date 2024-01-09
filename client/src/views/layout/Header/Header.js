import React from "react";
import {Link, NavLink} from "react-router-dom";

import 'assets/scss/layout/header.scss';

const Header = () => {
  return (
    <header>
      <Link className="logo" to='/'><span>FRESHPOSONG</span></Link>
      <div className='spacer'></div>
      <div className='header-btn-wrap'>
        <NavLink
          className='header-btn text'
          to='/portfolio'
        >
          <span>Project</span>
        </NavLink>
        <
          NavLink
          className='header-btn text'
          to='/blog'
        >
          <span>Blog</span>
        </NavLink>
      </div>
      <div className='header-btn-wrap'>
        <NavLink className='header-btn icon' to='/template/diamond'>
          <i className='pi-CurrencyEth'></i>
        </NavLink>
        <a className='header-btn icon' href='https://github.com/freshpopo' target='_black'>
          <i className='pi-GithubLogo'></i>
        </a>
      </div>
    </header>
  )
}

export default Header;