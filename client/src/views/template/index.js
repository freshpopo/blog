import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import 'assets/scss/pages/template.scss';
import {Diamond} from "components/common";
import Auth from "hoc/auth";


const TemplatePage = () => {
  const templateMenu = [
    {
      path: 'diamond',
      name: 'Diamond',
    },
    {
      path: 'badge',
      name: 'Badge',
    },
    {
      path: 'button',
      name: 'Button',
    },
    {
      path: 'input',
      name: 'Input',
    }
  ];
  return (
    <>
      <div className="section content">
        <div className="section-header">
          <h1 className="section-header-title">UI Template</h1>
          <Diamond size="small"></Diamond>
          <span className="section-header-desc">필요할 때 마다 추가됩니다.</span>
        </div>
        <nav className="template-nav">
          {
            templateMenu.map((item, index) => (
              <NavLink
                className="template-nav-item"
                key={index}
                to={item.path}
              >
                {item.name}
              </NavLink>
            ))
          }
        </nav>
      </div>
      <Outlet/>
    </>
  )
}

export default Auth(TemplatePage, null);