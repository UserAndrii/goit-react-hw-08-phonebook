import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DiSqllite } from 'react-icons/di';

export const Container = styled.div`
  padding: 30px 30px;
`;

export const HeroTitle = styled.h1`
  font-style: 400;
  font-weight: 900;
  font-size: 26px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 30px;

  // DESKTOP STYLE
  @media screen and (min-width: 1200px) {
    font-size: 40px;
    line-height: 1.36;
  }
`;

export const Text = styled.p`
  text-indent: 30px;
  color: #173b4d;
`;

export const Span = styled.span`
  font-weight: 900;
  font-size: 20px;
  line-height: 1.36;
  letter-spacing: 0.03em;
  /* padding-left: 30px; */
  color: #ba000d;
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SecondTitle = styled.h2`
  font-style: 400;
  font-weight: 900;
  font-size: 20px;
  line-height: 1.62;
  text-indent: 30px;

  letter-spacing: 0.03em;
  margin-bottom: 15px;

  // DESKTOP STYLE
  @media screen and (min-width: 1200px) {
    font-size: 32px;
    line-height: 1.36;
  }
`;

export const Item = styled.li`
  margin-bottom: 20px;

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;

export const ItemIcon = styled(DiSqllite)`
  width: 20px;
  height: 20px;
  color: rgb(186, 0, 13);
`;

export const ItemSpan = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.03em;
  color: rgb(186, 0, 13);
`;

export const ImageWrapper = styled.div`
  display: block;

  @media screen and (max-width: 799px) {
    max-width: 460px;
    margin: 10px auto;
  }

  @media screen and (min-width: 800px) {
    width: 460px;
    height: auto;
    margin: 0 auto;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 799px) {
    width: 100%;
  }

  @media screen and (min-width: 800px) {
    max-width: 460px;
    height: auto;
  }
`;

export const LinkToAuth = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.03em;
  color: #012538;
  text-decoration: underline;
  transition: color 0.25s ease-Out;

  :hover {
    color: rgb(186, 0, 13);
  }
`;
