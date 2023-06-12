import { AuthWrap, Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthWrap>
      <Link to="/login" style={{ marginRight: 10 }}>
        Log In
      </Link>
      <Link to="/register">Sign Up</Link>
    </AuthWrap>
  );
};

export default AuthNav;
