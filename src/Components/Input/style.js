import styled from "styled-components";

export const InputStyle = styled.div`
  color: var(--whiteFixed);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 24px;

  input {
    height: 40px;
    border-radius: 50px;
    width: 250px;
    text-align: center;
    border: 1px solid black;
  }
`;
