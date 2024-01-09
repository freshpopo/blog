import React, {useState} from "react";
import {emptyCheck} from "../../utils/utils";
import shortId from "shortid";
import 'assets/scss/components/common/input.scss';

const InputText = ({label, required, error, success, size, message, _onChange, ...props}) => {
  const id = shortId.generate();
  const [inputValue, setInputValue] = useState(props.value);
  function labelUse(value) {
    let labelClass = 'label' + (required ? ' required' : '') + (size ? ' ' + size : '');
    if (value) {
      return <label htmlFor={id} className={labelClass}>{value}</label>
    }
  }
  function messageUse(value) {
    if (value) {
      return <p className="input-message">{value}</p>
    }
  }
  function controlClass() {
    return 'input-control' +
      (size ? ' ' + size : '') +
      (error ? ' error' : '') +
      (success ? ' success' : '')
      ;
  }
  return (
    <div className="input-wrap">
      {labelUse(label)}
      <div className={controlClass()}>
        <input
          id={id}
          type={emptyCheck(props.type) ? props.type : 'text'}
          className="input"
          placeholder={props.placeholder}
          readOnly={props.readonly}
          value={inputValue}
          disabled={props.disabled}
          required={props.required}
          onChange={(ev) => setInputValue(ev.target.value)}
        />
      </div>
      {messageUse(message)}
    </div>
  )
}

export default InputText;