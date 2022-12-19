import styled from "styled-components";

export const FormDivContainer = styled.div`
  background-color: var(--brand2);
  box-shadow: -4px 4px 3px rgb(0 0 0 / 36%);
  border-radius: 5px;
  width: 80vw;
  min-width: 280px;
  max-width: 450px;
  margin: 46px auto;
  color: var(--white);
  padding: 10px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    padding-top: 25px;
    margin-bottom: 15px;
    color: var(--purple);
  }

  form {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  span {
    display: inline-block;
    margin: 15px;
    margin-top: 15px;
    a {
      margin: 0 5px;
      text-decoration: none;
      text-transform: uppercase;
      color: var(--brand3);
    }
  }

  .login-button {
    border: 1px solid var(--brand3);
  }
  .login-button:hover {
    box-shadow: -4px 4px 0px var(--black);
    margin-left: 10px;
  }

  .cadastro-button {
    width: 80%;
    text-align: center;
  }
  .cadastro-link {
    color: var(--brand4);
    margin-left: 10px;
  }

  @media screen and (min-width: 768px) {
    height: 600px;
    max-width: 450px;
    span {
      margin-top: 60px;
    }
  }
`;
