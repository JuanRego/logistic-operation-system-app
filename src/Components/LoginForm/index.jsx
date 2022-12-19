import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Providers/user";
import { FormDivContainer } from "./style";

const LoginForm = () => {
  const { user, handleLogin } = useContext(UserContext);
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitLogin = (data) => {
    handleLogin(data.email, data.password);
  };

  return (
    <FormDivContainer>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit(submitLogin)}>
        <Input
          name="email"
          register={register}
          label="Email"
          placeholder="Insira o seu email"
          error={errors.email?.message}
        />
        <Input
          name="password"
          register={register}
          label="Senha"
          icon
          placeholder="Insira a sua senha"
          type="password"
          error={errors.password?.message}
        />
        <Button className="login-button" type="submit">
          Login
        </Button>
      </form>
      <span className="cadastro-button">
        Ainda não possui uma conta?
        <Link className="cadastro-link" to="/register">
          Cadastre-se
        </Link>
      </span>
    </FormDivContainer>
  );
};
export default LoginForm;
