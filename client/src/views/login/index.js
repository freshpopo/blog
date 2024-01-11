import {Button, Diamond, InputText} from "components/common";
import 'assets/scss/pages/login.scss';

function LoginPage() {
  return (
    <div className="section content">
      <div className="login-content">
        <Diamond></Diamond>
        <h1 className="login-title">FRESHPOSONG</h1>
        <div className="login-input-wrap">
          <InputText
            label="Email"
            placeholder="이메일을 입력하세요."
          ></InputText>
          <InputText
            type="password"
            label="Password"
            placeholder="비밀번호를 입력하세요."
          ></InputText>
        </div>
        <Button
          type="fill"
          block
          disabled
        >Login</Button>
      </div>
    </div>
  )
}

export default LoginPage