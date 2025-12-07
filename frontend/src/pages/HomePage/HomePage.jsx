
import {HomePageContainer, Title, Subtitle} from "./HomePage.styles";
import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard"


const HomePage = () => {
  return (
    <>
    <HomePageContainer>
      <NavBar />
      <Title>Lumero</Title>
      <Subtitle>Your Ultimate Visitor Management Solution</Subtitle>      
      <ProductCard />
    </HomePageContainer>
    </>
  );
}

export default HomePage;
