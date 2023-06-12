import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media screen and (max-width: 899px) {
    margin: 0 auto;
    max-width: 400px;
  }

  @media screen and (min-width: 900px) {
    width: 400px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 1.16;
  letter-spacing: 0.03em;
  color: #ba000d;
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  line-height: 2;
  color: #607d8b;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 42px;
  font-size: 16px;
  line-height: 1.16;
  background-color: inherit;
  padding-left: 12px;
  border: 2px solid #607d8b;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    border: 2px solid #ba000d;
    outline: transparent;
  }

  :focus + Label {
    color: #ba000d;
  }
`;
