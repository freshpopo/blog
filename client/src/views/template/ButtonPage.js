import React from "react";
import {Button} from "components/common";

const TemplateButtonPage = () => {
  const icons = ['icon', 'icon-left', 'icon-right'];
  const type = ['default', 'fill', 'text', 'plain'];
  const size = ['x-small', 'small', 'default', 'large', 'x-large'];
  const colors = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
  const colorCream = ['cream-50', 'cream-100', 'cream-200', 'cream-300', 'cream-400', 'cream-500', 'cream-600', 'cream-700', 'cream-800', 'cream-900', 'cream-1000'];

  function typeIconContent (item) {
    switch (item) {
      case 'icon-left' :
        return <><i className="pi-ArrowElbowRight"></i><span>Left Icon</span></>
      case 'icon-right' :
        return <><span>Right Icon</span><i className="pi-ArrowElbowRight"></i></>
      default :
        return <i className="pi-ArrowElbowRight"></i>
    }
  }

  return (
    <div className="section content template-section">
      <h2 className="template-title">Default</h2>
      <div className="row">
        <div className="col-auto">
          <Button>Button</Button>
        </div>
        <div className="col-auto">
          <Button disabled>Disabled</Button>
        </div>
        <div className="col-auto">
          <Button href="https://github.com/freshpopo" target="_black">a tag link</Button>
        </div>
      </div>
      <h2 className="template-title">Icon</h2>
      <div className="row">
        {
          icons.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button icon={item === 'icon'}>
                {typeIconContent(item)}
              </Button>
            </div>
          ))
        }
        {
          icons.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button icon={item === 'icon'} rounded>
                {typeIconContent(item)}
              </Button>
            </div>
          ))
        }
      </div>
      <h2 className="template-title">Type</h2>
      <div className="row">
        {
          type.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button type={item}>{item}</Button>
            </div>
          ))
        }
        {
          type.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button type={item} rounded>{item} Round</Button>
            </div>
          ))
        }
      </div>
      <h2 className="template-title">Colors</h2>
      <h3 className="template-title">Default</h3>
      <div className="row">
        {
          colors.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button color={item}>{item}</Button>
            </div>
          ))
        }
        {
          colorCream.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button color={item}>{item}</Button>
            </div>
          ))
        }
      </div>
      <h3 className="template-title">Fill</h3>
      <div className="row">
        {
          colors.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button color={item} type="fill">{item}</Button>
            </div>
          ))
        }
        {
          colorCream.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button color={item} type="fill">{item}</Button>
            </div>
          ))
        }
      </div>
      <h3 className="template-title">Text</h3>
      <div className="row">
        {
          colors.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button color={item} type="text">{item}</Button>
            </div>
          ))
        }
        {
          colorCream.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button color={item} type="text">{item}</Button>
            </div>
          ))
        }
      </div>
      <h3 className="template-title">Plain</h3>
      <div className="row">
        {
          colors.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button color={item} type="plain">{item}</Button>
            </div>
          ))
        }
        {
          colorCream.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button color={item} type="plain">{item}</Button>
            </div>
          ))
        }
      </div>
      <h2 className="template-title">Size</h2>
      <h3 className="template-title">Default</h3>
      <div className="row">
        {
          size.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button size={item}>{item}</Button>
            </div>
          ))
        }
      </div>
      <div className="row">
        {
          size.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button size={item} rounded>{item}</Button>
            </div>
          ))
        }
      </div>
      <h3 className="template-title">Left Icon</h3>
      <div className="row">
        {
          size.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button size={item}>{typeIconContent('icon-left')}</Button>
            </div>
          ))
        }
      </div>
      <div className="row">
        {
          size.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button size={item} rounded>{typeIconContent('icon-left')}</Button>
            </div>
          ))
        }
      </div>
      <h3 className="template-title">Right Icon</h3>
      <div className="row">
        {
          size.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button size={item}>{typeIconContent('icon-right')}</Button>
            </div>
          ))
        }
      </div>
      <div className="row">
        {
          size.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button size={item} rounded>{typeIconContent('icon-right')}</Button>
            </div>
          ))
        }
      </div>
      <h3 className="template-title">Icon</h3>
      <div className="row">
        {
          size.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button size={item} icon>{typeIconContent('icon')}</Button>
            </div>
          ))
        }
      </div>
      <div className="row">
        {
          size.map((item, index) => (
            <div className="col-auto" key={index}>
              <Button size={item} icon rounded>{typeIconContent('icon')}</Button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TemplateButtonPage;