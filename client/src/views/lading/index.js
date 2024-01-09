import React, {useEffect} from "react";
import axios from "axios";

const LadingPage = () => {
  useEffect(() => {
    axios.get('/api/hello')
      .then(response => console.log(response))
  }, []);

  return (
    <h1>Hi Freshpopo Lading Page</h1>
  )
}

export default LadingPage;