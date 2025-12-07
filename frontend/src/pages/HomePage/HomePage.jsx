
import {HomePageContainer, Subtitle} from "./HomePage.styles";
import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard"


const HomePage = () => {
  return (
    <>
    <HomePageContainer>
      <NavBar />
      <Subtitle>Shop the best in fashion, electronics, bags, and accessories — curated for your style and budget.
      Use the search bar or browse by category to quickly find your perfect product.</Subtitle>      
      <ProductCard />
    </HomePageContainer>
    </>
  );
}

export default HomePage;
