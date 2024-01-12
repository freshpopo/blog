import Auth from "hoc/auth";

const LadingPage = () => {
  return (
    <h1>Hi Freshpopo Lading Page</h1>
  )
}

export default Auth(LadingPage, null);