import { useEffect, useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [auth, setAuth] = useState();

  const verifyAuth = async (e) => {
    try {
      const res = await axios.get(
        'https://my-todo-app-back-production.up.railway.app/api/auth/is_logged_in'
      );
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
