import {Badge} from "components/common";

const TemplateBadgePage = () => {
  return (
    <div className="section content template-section">
      <h2 className="template-title">Default</h2>
      <div className="row">
        <div className="col-auto">
          <Badge>Default</Badge>
        </div>
        <div className="col-auto">
          <Badge active>Active</Badge>
        </div>
        <div className="col-auto">
          <Badge disabled>Disabled</Badge>
        </div>
        <div className="col-auto">
          <Badge view>View</Badge>
        </div>
        <div className="col-auto">
          <Badge view active>View Active</Badge>
        </div>
      </div>
      <h2 className="template-title">Size</h2>
      <div className="row">
        <div className="col-auto">
          <Badge>Default</Badge>
        </div>
        <div className="col-auto">
          <Badge size="small">small</Badge>
        </div>
        <div className="col-auto">
          <Badge size="x-small">x-small</Badge>
        </div>
      </div>
    </div>
  )
}

export default TemplateBadgePage;