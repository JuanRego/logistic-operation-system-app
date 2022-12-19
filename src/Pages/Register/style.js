import styled from "styled-components";

export const FormDivContainer = styled.div`
  background-color: var(--brand2);
  width: 80vw;
  min-width: 280px;
  max-width: 450px;
  box-shadow: -4px 4px 3px rgb(0 0 0 / 36%);
  border-radius: 5px;
  margin-top: 46px;
  margin-bottom: 46px;
  margin-inline: auto;
  color: var(--white);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    padding-top: 25px;
    margin-bottom: 15px;
    color: var(--brand1);
  }

  form {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .cadastro-button {
    border: 1px solid var(--brand3);
  }
  .cadastro-button:hover {
    box-shadow: -4px 4px 0px var(--black);
    margin-left: 10px;
  }

  .login-button {
    width: 80%;
    text-align: center;
    color: var(--brand1);
    margin-bottom: 30px;
  }

  .login-link {
    color: var(--brand4);
    margin-left: 10px;
  }
`;
