import React from "react";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

import 'assets/scss/layout/footer.scss';

const Footer = () => {
  const userInfo = useSelector(state => state.user);
  console.log('Footer : ', userInfo.loginSuccess);
  const nowYear = () => {
    const _date = new Date();
    return _date.getFullYear();
  }
  return (
    <footer>
      <p>Copyright &copy; <NavLink to={'/login'} className="btn-text-link">FreshPoSong</NavLink> {nowYear()}</p>
    </footer>
  )
}

export default Footer;