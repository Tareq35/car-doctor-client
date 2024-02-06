import About from "../About/About";
import Banner from "../Banner/Banner";
import OurInfo from "../OurInfo/OurInfo";
import OurProducts from "../OurProducts/OurProducts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services> </Services>
      <OurInfo></OurInfo>
      <OurProducts></OurProducts>
    </div>
  );
};

export default Home;
