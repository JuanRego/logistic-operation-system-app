import MiniDashBoardStyle from "./style";
import { Link } from "react-router-dom";

const MiniDashBoard = () => {
  return (
    <MiniDashBoardStyle>
      <div className="menu">
        <Link className="button-option" to="/login">
          Login
        </Link>
        <Link className="button-option" to="/register">
          Cadastrar
        </Link>
      </div>
    </MiniDashBoardStyle>
  );
};
export default MiniDashBoard;
