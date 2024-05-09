import styled from "styled-components";

const Container = styled.div`
  max-width: 1760px;
  margin: 0 auto;

  @media only screen and (max-width: 1760px) {
    max-width: 100%;
    padding: 0 3rem;
    
  }
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 2rem;
  }
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export default Container;
