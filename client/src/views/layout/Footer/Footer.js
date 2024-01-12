import { useSelector } from "react-redux";

import 'assets/scss/layout/footer.scss';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const userInfo = useSelector(state => state.user.userData);
  const nowYear = () => {
    const _date = new Date();
    return _date.getFullYear();
  }

  const userAction = () => {
    if (userInfo.isAuth) {
      // TODO Toast 컴포넌트 작업 후 토스트 컴포넌트 띄우기
      axios.get('/api/users/logout')
        .then(response => {
          if (response.data.success) {
            alert('로그아웃에 성공하였습니다.');
          }
        })
    } else {
      navigate('/login');
    }

  }
  return (
    <footer>
      <p>Copyright &copy; <span className="btn-text-link" onClick={userAction}>FreshPoSong</span> {nowYear()}</p>
    </footer>
  )
}

export default Footer;