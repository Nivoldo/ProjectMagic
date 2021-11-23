import styled from 'styled-components';

export const Container = styled.div`
  padding: 80px 40px;
  background: rgb(17, 17, 17);
  border-bottom: 1px solid gray;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: 50px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;

  &:hover {
      color: #0067BC;
      transition: 0.2s ease-in;
  }
`;

export const Title = styled.p`
  font-size: 19px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;