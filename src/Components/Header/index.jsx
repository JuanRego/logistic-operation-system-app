import HeaderStyle from "./style";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <div>
        <FontAwesomeIcon icon={solid("fa-solid fa-bars")} />
      </div>
    </HeaderStyle>
  );
};

export default Header;
