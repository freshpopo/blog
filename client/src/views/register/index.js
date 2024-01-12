import {Button, Diamond, InputText} from "components/common";
import 'assets/scss/pages/login.scss';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUser} from "_actions/user_action";
import Auth from "hoc/auth";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [PasswordMessage, setPasswordMessage] = useState('');

  function onSubmitHandler(ev) {
    ev.preventDefault();

    if (Password !== ConfirmPassword) {
      setPasswordMessage('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      return
    } else {
      setPasswordMessage('');
    }

    let body = {
      email: Email,
      name: Name,
      password: Password
    }

    dispatch(registerUser(body))
      .then(response => {
        if (response.payload.success) {
          // TODO Toast 컴포넌트 작업 후 토스트 컴포넌트 띄우기
          navigate('/');
        } else {
          alert("회원가입에 실패하였습니다.");
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
        <h1 className="login-title">REGISTER</h1>
        <div className="login-input-wrap">
          <InputText
            value={Email}
            type="email"
            label="Email"
            placeholder="이메일을 입력하세요."
            onChange={(ev) => setEmail(ev.target.value)}
          ></InputText>
          <InputText
            value={Name}
            type="text"
            label="Name"
            placeholder="닉네임을 입력하세요."
            onChange={(ev) => setName(ev.target.value)}
          ></InputText>
          <InputText
            value={Password}
            error={PasswordMessage}
            type="password"
            label="Password"
            placeholder="비밀번호를 입력하세요."
            onChange={(ev) => setPassword(ev.target.value)}
          ></InputText>
          <InputText
            value={ConfirmPassword}
            error={PasswordMessage}
            message={PasswordMessage}
            type="password"
            label="Confirm Password"
            placeholder="비밀번호를 다시 입력하세요."
            onChange={(ev) => setConfirmPassword(ev.target.value)}
          ></InputText>
        </div>
        <Button
          type="fill"
          block
        >
          Register
        </Button>
      </form>
    </div>
  )
}

export default Auth(RegisterPage, false);