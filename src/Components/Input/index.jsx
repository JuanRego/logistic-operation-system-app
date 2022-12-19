import { InputStyle } from "./style";
import { useState } from "react";

const Input = ({ icon, register, name, label, error, ...rest }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <InputStyle>
      <label>{label}</label>
      {icon ? (
        <input
          {...register(name)}
          {...rest}
          type={show ? "text" : "password"}
        />
      ) : (
        <input {...register(name)} {...rest} />
      )}
      {icon && (
        <div className="btn-show-hide" onClick={toggleShow}>
          {show ? <div /> : <div />}
        </div>
      )}
      {!!error && (
        <div className="error">
          <span>{error}</span>
        </div>
      )}
    </InputStyle>
  );
};

export default Input;
