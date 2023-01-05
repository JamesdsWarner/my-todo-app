import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import fetch from 'node-fetch';

// import Cookies from 'universal-cookie';

import * as Styled from '../Auth.styles';

const Login = () => {
  //   const cookies = new Cookies();

  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(email, password),
        headers: { withCredentials: true, credentials: 'include' },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
      //   const res = await axios.post(
      //     'https://todo-back.herokuapp.com/api/auth/login',
      //     {
      //       email,
      //       password,
      //       //
      //     },
      //     { withCredentials: true, credentials: 'include' }
      //   );
      console.log(res);
      //   cookies.set('token', res.data.token, { path: '/' });

      navigate('/');

      console.log(res);

      toast.success('Login Success');
    } catch (err) {
      console.log(err);
      toast.error('Login Failed');
    }
  };
  return (
    <Styled.FormWrapper>
      <Styled.FormTitle>Login</Styled.FormTitle>
      <Styled.Form onSubmit={login}>
        <Styled.FormLabel htmlFor="email">
          Email
          <Styled.FormInput type="email" name="email" placeholder="email" required />
        </Styled.FormLabel>

        <Styled.FormLabel htmlFor="password">
          Password
          <Styled.FormInput type="password" name="password" placeholder="password" required />
        </Styled.FormLabel>
        <Styled.Button type="submit">Login</Styled.Button>
      </Styled.Form>
    </Styled.FormWrapper>
  );
};

export default Login;
