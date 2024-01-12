import {Diamond} from "components/common";

const TemplateDiamondPage = () => {
  return (
    <div className="section content template-section">
      <h2 className="template-title">Default</h2>
      <div className="row">
        <div className="col-auto">
          <Diamond/>
        </div>
        <div className="col-auto">
          <Diamond active/>
        </div>
        <div className="col-auto">
          <Diamond filled/>
        </div>
      </div>
      <h2 className="template-title">Work Type</h2>
      <h3 className="template-title">Default</h3>
      <div className="row">
        <div className="col-auto">
          <Diamond workType="plan"></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="design"></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="publishing"></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="develop"></Diamond>
        </div>
      </div>
      <h3 className="template-title">Option - active</h3>
      <div className="row">
        <div className="col-auto">
          <Diamond workType="plan" active></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="design" active></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="publishing" active></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="develop" active></Diamond>
        </div>
      </div>
      <h3 className="template-title">Option - Filled</h3>
      <div className="row">
        <div className="col-auto">
          <Diamond workType="plan" filled></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="design" filled></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="publishing" filled></Diamond>
        </div>
        <div className="col-auto">
          <Diamond workType="develop" filled></Diamond>
        </div>
      </div>
      <h2 className="template-title">Size</h2>
      <div className="row">
        <div className="col-auto">
          <Diamond size="small"/>
        </div>
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