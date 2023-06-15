import styled from 'styled-components';

export const Tail = styled.footer`
  height: 100px;
  padding: 15px 20px;
  box-shadow: 0px 1px 5px #ccc;
  background-color: rgb(245, 245, 245);
  margin-top: 20px;

  /* @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } */
`;

export const FooterContainer = styled.footer`
  min-height: 100px;
  box-shadow: 0px 1px 5px #ccc;
  background-color: rgb(245, 245, 245);
  padding: 20px;
  text-align: center;

  @media screen and (min-width: 460px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 200px;

  @media screen and (max-width: 459px) {
    margin: 0 auto 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;

export const IconLink = styled.a`
  padding: 10px;
  color: #333;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ba000d;
  }
`;

export const Copyright = styled.p`
  margin-top: 10px;
`;
