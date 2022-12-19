import HomeStyle from "./style";
import MiniDashBoard from "../../Components/MiniDashBoard";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <HomeStyle>
      <h1 className="title">Home</h1>
      <MiniDashBoard></MiniDashBoard>
      <Footer></Footer>
    </HomeStyle>
  );
};

export default Home;
