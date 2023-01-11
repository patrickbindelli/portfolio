import styled from "styled-components";

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  gap: 100px;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 850px) {
    ${Content} {
      transition: flex-direction 250ms ease-in-out;
      flex-direction: column;
      gap: 200px;
    }
  }
`;

export const PrismContainer = styled.div``;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    @media only screen and (max-width: 850px) {
      font-size: 6vw;
    }

    font-size: 2vw;

    color: ${({ theme }) => theme.colors.secondary};
  }

  h1 {
    @media only screen and (max-width: 850px) {
      font-size: 7vw;
    }
    font-size: 3vw;
  }
`;
