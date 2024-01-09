import React from "react";

import 'assets/scss/layout/footer.scss';

const Footer = () => {
  const nowYear = () => {
    const _date = new Date();
    return _date.getFullYear();
  }
  return (
    <footer>
      <p>Copyright &copy; FreshPoSong {nowYear()}</p>
    </footer>
  )
}

export default Footer;