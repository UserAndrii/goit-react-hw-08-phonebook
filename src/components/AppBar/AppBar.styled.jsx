import styled from 'styled-components';

export const Header = styled.header`
  padding: 15px 20px;
  box-shadow: 0px 1px 5px #ccc;
  background-color: rgb(245, 245, 245);

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
