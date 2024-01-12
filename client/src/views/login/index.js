import {Button, Diamond, InputText} from "components/common";
import 'assets/scss/pages/login.scss';
import {useState} from "react";
import { loginUser } from '_actions/user_action';
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import Auth from "hoc/auth";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [EmailMessage, setEmailMessage] = useState('');
  const [PasswordMessage, setPasswordMessage] = useState('');

  const onSubmitHandler = (ev) => {
    ev.preventDefault();

    let body = {
      email: Email,
      password: Password,
    }

    dispatch(loginUser(body))
      .then(response => {
        if (response.payload.loginSuccess) {
          navigate("/");
        } else {
          if (response.payload.errorType === 'email') {
            setEmailMessage(response.payload.message);
          } else if (response.payload.errorType === 'password') {
            setPasswordMessage(response.payload.message);
          }
        }
      })
  }

  return (
    <div className="section content">
      <form
        className="login-content"
        onSubmit={onSubmitHandler}
      >
        <Diamond></Diamond>
        <h1 className="login-title">FRESHPOSONG</h1>
        <div className="login-input-wrap">
          <InputText
            value={Email}
            message={EmailMessage}
            error={EmailMessage}
            type="email"
            label="Email"
            placeholder="이메일을 입력하세요."
            onChange={(ev) => setEmail(ev.target.value)}
          ></InputText>
          <InputText
            value={Password}
            message={PasswordMessage}
            error={PasswordMessage}
            type="password"
            label="Password"
            placeholder="비밀번호를 입력하세요."
            onChange={(ev) => setPassword(ev.target.value)}
          ></InputText>
        </div>
        <Button
          type="fill"
          block
          disabled={!Email || !Password}
        >Login</Button>
      </form>
    </div>
  )
}

export default Auth(LoginPage, false);