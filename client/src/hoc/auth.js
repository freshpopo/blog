import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { auth } from '_actions/user_action';
import {useNavigate} from "react-router-dom";
const Auth = function (SpecificComponent, option, adminRoute = null) {
  // null => 아무나 출입이 가능한 페이지
  // false => 로그인한 유저만 출입이 가능한 페이지
  // true => 로그인한 유저는 출입이 불가능한 페이지

  function AuthenticationCheck() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth())
        .then(response => {
          if(!response.payload.isAuth) {
            // 로그인 하지 않은 상태
            if (option) {
              navigate('/login');
            }
          } else {
            // 로그인한 상태

            if (adminRoute && !response.payload.isAdmin) {
              // TODO 페이지 접속 권한이 없을 때 toast 안내
              navigate('/');
            } else {
              console.log('로그인 인증 : ',response, option);
              if (option === false) {
                navigate('/');
              }
            }
          }
        })
    }, [dispatch, navigate])

    return (
      <SpecificComponent />
    )
  }
  return AuthenticationCheck
}

export default Auth;