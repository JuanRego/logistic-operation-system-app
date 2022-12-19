import styled from "styled-components";

export const FooterStyle = styled.div`
  color: var(--black);
  background-color: var(--grey2);
  font-size: 15px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  position: fixed;
  border-radius: 50px;
  right: 0px;
  bottom: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: -4px 4px rgb(0 0 0 / 25%);
  .mini-logo {
    color: #d72b4e;
    display: flex;
    height: 30px;
    width: 30px;
    background-color: var(--whiteFixed);
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .extension,
  .extension:link {
    font-size: 12px;
    color: var(--whiteFixed);
    text-decoration: none;
    background-color: var(--grey2);
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default FooterStyle;
