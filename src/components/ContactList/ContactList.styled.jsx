import styled from 'styled-components';

export const ListWrapper = styled.div`
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

export const List = styled.ul`
  width: 100%;
`;
