import ButtonStyle from "./style";
const Button = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
};

export default Button;
