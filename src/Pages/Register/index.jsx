import Input from "../../Components/Input";
import { Link, useHistory } from "react-router-dom";
import { FormDivContainer } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../Components/Button";
import { useContext } from "react";
import { UserContext } from "../../Providers/user";
import Footer from "./../../Components/Footer/index";

const Register = () => {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username obrigatório")
      .min(4, "Mínimo de 4 caracteres")
      .max(18, "Máximo de 18 caracteres"),
    plataform: yup.string().required("Plataforma obrigatória"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Mínimo de 6 digitos")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
        "Necessário números e pelo menos 1 letra minúscula e maiúscula"
      ),
    confirm_password: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const RegisterContext = () => useContext(UserContext);
  const { handleRegister } = RegisterContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleFormSubmit = (data) => {
    delete data.confirm_password;
    handleRegister(data);
  };

  return (
    <>
      <FormDivContainer>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Input
            label="Nome"
            register={register}
            name="nome"
            error={errors.nome?.message}
            placeholder="Insira seu nome completo"
          />
          <Input
            label="Número de celular"
            register={register}
            name="cellphone"
            error={errors.cellphone?.message}
            placeholder="Insira seu número celular"
          />
          <Input
            label="E-mail"
            register={register}
            name="email"
            error={errors.email?.message}
            placeholder="Insira o seu email"
          />
          <Input
            label="Senha"
            register={register}
            name="password"
            type="password"
            icon
            error={errors.password?.message}
            placeholder="Insira sua senha"
          />
          <Input
            label="Confirma Senha"
            register={register}
            name="confirm_password"
            type="password"
            icon
            error={errors.confirm_password?.message}
            placeholder="Confirme a sua senha"
          />
          <Button className="cadastro-button" type="submit">
            Cadastrar
          </Button>
          <span className="login-button">
            Já possui uma conta?
            <Link className="login-link" to="/login">
              Entre
            </Link>
          </span>
        </form>
      </FormDivContainer>
      <Footer />
    </>
  );
};

export default Register;
