import React from "react";
import {Diamond} from "components/common";

const TemplateDiamondPage = () => {
  return (
    <div className="section content template-section">
      <h2 className="template-title">Default</h2>
      <div className="row">
        <div className="col-auto">
          <Diamond/>
        </div>
      </div>
      <h2 className="template-title">Type</h2>
      <h3 className="template-title">Default</h3>
      <div className="row">
        <div className="col-auto">
          <Diamond type="plan"></Diamond>
        </div>
        <div className="col-auto">
          <Diamond type="design"></Diamond>
        </div>
        <div className="col-auto">
          <Diamond type="publishing"></Diamond>
        </div>
        <div className="col-auto">
          <Diamond type="develop"></Diamond>
        </div>
      </div>
      <h3 className="template-title">Option - active</h3>
      <div className="row">
        <div className="col-auto">
          <Diamond type="plan" active></Diamond>
        </div>
        <div className="col-auto">
          <Diamond type="design" active></Diamond>
        </div>
        <div className="col-auto">
          <Diamond type="publishing" active></Diamond>
        </div>
        <div className="col-auto">
          <Diamond type="develop" active></Diamond>
        </div>
      </div>
      <h2 className="template-title">Size</h2>
      <div className="row">
        <div className="col-auto">
          <Diamond/>
        </div>
        <div className="col-auto">
          <Diamond size="large"></Diamond>
        </div>
      </div>
    </div>
  )
}

export default TemplateDiamondPage;