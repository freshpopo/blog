import React from "react";
import 'assets/scss/components/common/diamond.scss';

const Diamond = ({type, size, active, thickness}) => {
  let diamondClass =
    'diamond' +
    (type ? ' ' + type : '') +
    (size ? ' ' + size : '') +
    (active ? ' active' : '') +
    (thickness ? ' ' + thickness : '');
  return (
    <div
      className={diamondClass}
    >
      <svg viewBox="0 0 10 15">
        <path
          className="diamond-path"
          d="M2 7.5L5 2.5L8 7.5L5 12.5L2 7.5Z"
        />
      </svg>
    </div>
  )
}

export default Diamond;