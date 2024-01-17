import {useState} from "react";
import Toast from "./Toast";

const ToastList = () => {
  const [toasts, setToasts] = useState([]);

  return (
    <div className="toast-list">
      {
        toasts.map((item) => (
          <Toast
            type={item.type}
            title={item.title}
            content={item.content}
          ></Toast>
        ))
      }
    </div>
  )
}

export default ToastList;