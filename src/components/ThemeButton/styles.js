import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 2px;

  position: absolute;
  top: 10px;
  left: 10px;
  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
