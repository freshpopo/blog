import React from "react";
import {InputText} from 'components/common';

const TemplateInputTextPage = () => {
  const size = ['x-small', 'small', 'default', 'large', 'x-large'];
  return (
    <div className="section content template-section">
      <h2 className="template-title">Default</h2>
      <div className="row">
        <div className="col-3 col-lg-4 col-md-6 col-sm-12">
          <InputText
            label="Default"
            value="Value | 내용"
            required
          ></InputText>
        </div>
        <div className="col-3 col-lg-4 col-md-6 col-sm-12">
          <InputText
            label="Placeholder"
            placeholder="placeholder"
          ></InputText>
        </div>
        <div className="col-3 col-lg-4 col-md-6 col-sm-12">
          <InputText
            label="Message"
            value="Value | 내용"
            message="Message test"
          ></InputText>
        </div>
        <div className="col-3 col-lg-4 col-md-6 col-sm-12">
          <InputText
            label="Readonly"
            value="Value | 내용"
            readonly
          ></InputText>
        </div>
        <div className="col-3 col-lg-4 col-md-6 col-sm-12">
          <InputText
            label="Disabled"
            value="Value | 내용"
            disabled
          ></InputText>
        </div>
        <div className="col-3 col-lg-4 col-md-6 col-sm-12">
          <InputText
            label="Success"
            value="Value | 내용"
            message="Message test"
            success
          ></InputText>
        </div>
        <div className="col-3 col-lg-4 col-md-6 col-sm-12">
          <InputText
            label="Error"
            value="Value | 내용"
            message="Message test"
            error
          ></InputText>
        </div>
      </div>
      <h2 className="template-title">Size</h2>
      <div className="row-10">
        {
          size.map((item, index) => (
            <div className="col-2 col-lg-3 col-md-5 col-sm-10" key={index}>
              <InputText
                label={item}
                value="Value | 내용"
                message={'Message ' + item}
                size={item}
              ></InputText>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TemplateInputTextPage;