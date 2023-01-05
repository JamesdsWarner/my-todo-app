import { useEffect, useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [auth, setAuth] = useState();

  const verifyAuth = async (e) => {
    try {
      const res = await axios.get('http://localhost:8000/api/auth/is_logged_in/');
      cookies.set('token', res.data.token, options);

      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    (async () => {
      const data = await verifyAuth();
      setAuth(data);
    })();
  });

  return { auth };
};
export default useAuth;
