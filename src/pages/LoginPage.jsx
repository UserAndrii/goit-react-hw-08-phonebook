import { Helmet } from 'react-helmet';
import LoginForm from 'components/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default LoginPage;
