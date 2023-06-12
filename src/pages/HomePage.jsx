import { Helmet } from 'react-helmet';
import About from 'components/About';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <About />
    </>
  );
};

export default HomePage;
