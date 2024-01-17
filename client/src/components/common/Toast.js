const Toast = ({type, title, content}) => {

  const typeOptions = {
    'success': {
      icon: 'pi-Check',
      typeClass: 'success',
    },
    'info' : {
      icon: 'pi-Info',
      typeClass: 'info',
    },
    'warning' : {
      icon: 'pi-Warning',
      typeClass: 'warning',
    },
    'error' : {
      icon: 'pi-X',
      typeClass: 'error',
    }
  }

  return (
    <div className={'toast ' + typeOptions[type].typeClass}>
      <div className="toast-icon-wrap">
        <i className={typeOptions[type].icon}></i>
      </div>
      <div className="toast-content">
        {
          title && <div className="toast-title">{title}</div>
        }
        <div className="toast-desc">{content}</div>
      </div>
    </div>
  )
}

export default Toast;