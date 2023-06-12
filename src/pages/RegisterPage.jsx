import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
