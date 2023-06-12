import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 22px;
  line-height: 1.16;
  letter-spacing: 0.03em;
  color: #ba000d;
  margin-bottom: 10px;

  @media screen and (max-width: 899px) {
    text-align: center;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  padding: 20px 20px;
  border: 2px solid #607d8b;

  @media screen and (max-width: 899px) {
    margin: 0 auto;
    max-width: 400px;
  }

  @media screen and (min-width: 900px) {
    width: 400px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 2;
  color: #607d8b;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus-within {
    color: #ba000d;
  }
`;

export const Input = styled.input`
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

  :focus + label {
    color: #ba000d;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  position: relative;
  overflow: hidden;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.16;
  text-align: center;
  letter-spacing: 0.06em;
  text-transform: capitalize;
  cursor: pointer;
  max-width: 180px;
  padding: 10px;
  color: #607d8b;
  background-color: inherit;
  border: 2px solid #607d8b;
  transition: all 0.45s ease-Out;
  margin: 0 auto;

  :hover {
    color: #ba000d;
    border-color: #ba000d;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -200px;
    width: 100%;
    height: 2.5px;
    margin-top: 15px;
    align-self: flex-end;
    background: #ba000d;
    transition: all 0.45s ease-Out;
  }

  :hover::after {
    left: 0;
  }
`;
