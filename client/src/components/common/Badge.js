import React, {useState} from "react";
import 'assets/scss/components/common/badge.scss';

const Badge = ({children, size, active, disabled, view}) => {
  let [buttonActive, setButtonActive] = useState(active);
  function clickActive() {
    setButtonActive(!buttonActive);
  }
  if (view) {
    return (
      <div
        className={
          'badge' +
          (active ? ' active' : '') +
          (size ? ' ' + size : '')
        }
      >
        <span>{children}</span>
      </div>
    )
  } else {
    return (
      <button
        className={
          'badge' +
          (buttonActive ? ' active' : '') +
          (size ? ' ' + size : '')
        }
        onClick={clickActive}
        disabled={disabled}
      >
        <span>{children}</span>
      </button>
    )
  }
}

export default Badge;