import {Button} from "components/common";
import {useDispatch} from "react-redux";
import {useToast} from "../../_actions/toasts_action";

function TemplateToastDialogPage () {
  const dispatch = useDispatch();
  const toastText = {
    title: 'Toast Title 토스트 제목',
    content: '외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 국회의원의 수는 법률로 정하되, 200인 이상으로 한다. 국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원 과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는 부결된 것으로 본다.'
  }
  const ToastDefault = () => {

    let body = {
      title: toastText.title,
      content: toastText.content,
    }

    dispatch(useToast(body))
  }

  return (
    <div className="section content template-section">
      <h2 className="template-title">Toast</h2>
      <div className="row">
        <div className="col-auto">
          <Button
            onClick={ToastDefault}
          >Default</Button>
        </div>
        <div className="col-auto">
          <Button color="info">Info</Button>
        </div>
        <div className="col-auto">
          <Button color="success">Success</Button>
        </div>
        <div className="col-auto">
          <Button color="warning">Warning</Button>
        </div>
        <div className="col-auto">
          <Button color="error">Error</Button>
        </div>
      </div>
      <h2 className="template-title">Dialog</h2>
      <h3 className="template-title">View</h3>
      <div className="row">
        <div className="col-auto">
          <Button>Full</Button>
        </div>
        <div className="col-auto">
          <Button>No Header</Button>
        </div>
        <div className="col-auto">
          <Button>No Footer</Button>
        </div>
        <div className="col-auto">
          <Button>Content Only</Button>
        </div>
      </div>
      <h3 className="template-title">Size</h3>
      <div className="row">
        <div className="col-auto">
          <Button>x-small</Button>
        </div>
        <div className="col-auto">
          <Button>small</Button>
        </div>
        <div className="col-auto">
          <Button>default</Button>
        </div>
        <div className="col-auto">
          <Button>large</Button>
        </div>
        <div className="col-auto">
          <Button>x-large</Button>
        </div>
      </div>
    </div>
  )
}

export default TemplateToastDialogPage;