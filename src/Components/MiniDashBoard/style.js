import styled from "styled-components";

export const MiniDashBoardStyle = styled.div`
  width: 80vw;
  .menu {
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 80vh;
    gap: 15px;
    align-items: center;
  }
  .button-option {
    color: var(--brand1);
    width: 150px;
    height: 50px;
    background-color: var(--brand2);
    font-weight: bold;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default MiniDashBoardStyle;
