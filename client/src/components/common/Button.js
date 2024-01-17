import 'assets/scss/components/common/button.scss';
import {emptyCheck} from "../../utils/utils";

const Button = ({children, href, type, icon, rounded, size, color, disabled, block, onClick, ...props}) => {
  function childrenTag(item) {
    if (emptyCheck(item.props)) {
      return item
    } else {
      return <span>{item}</span>
    }
  }
  function classList() {
    return 'button' +
      (icon ? ' icon' : '') +
      (type ? ' ' + type : '') +
      (rounded ? ' rounded' : '') +
      (size ? ' ' + size : '') +
      (color ? ' text-' + color : '') +
      (block ? ' w-full' : '');
  }
  if (emptyCheck(href)) {
    return (
      <a
        href={href}
        className={
          classList() +
          (disabled ? ' disabled' : '')
        }
        target={props.target}
        onClick={onClick}
      >
        {childrenTag(children)}
      </a>
    )
  } else {
    return (
      <button
        className={classList()}
        disabled={disabled}
        onClick={onClick}
      >
        {childrenTag(children)}
      </button>
    )
  }
}

export default Button;