import {useState, useEffect} from "react";
import api from "../../services/api";
import {
  ProductCardContainer, 
  ProductDetails, 
  ProductImage, 
  ProductTitle, 
  ProductPrice,
  PaginationWrapper,
  PageButton,
  Sortcontainer,
  ProductCardMainContainer
} from "./ProductCard.styles"
import {Link} from 'react-router-dom';

import SearchInput from "../SearchInput/SearchInput";
import DropDown from "../DropDown/DropDown";

const categories = [
  "men's clothing", 
  "women's clothing", 
  "jewelery", 
  "electronics", 
];

const ProductCard = () => {
  const [searchItem, setSearchItem] = useState('');
  const [category, setCategory] = useState('');

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products",{
          params: {
            page,
            limit: itemsPerPage,
            search: searchItem,
            category
          }
        });

        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
        
      } catch (err) {
        setError('Failed to fetch teams: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, searchItem, category]); 

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ProductCardMainContainer>
      <Sortcontainer>
        <SearchInput onChange={(e) => setSearchItem(e.target.value)} value={searchItem}/>
        <DropDown onChange={(e) => setCategory(e.target.value)}  options={categories} value={category} placeholder="Select Category" />
      </Sortcontainer>
      <ProductCardContainer>
        {products.map((product) => (  
          <ProductDetails key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <ProductImage src={product.image} alt={product.title} />
            </Link>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>Price: ${product.price}</ProductPrice>
          </ProductDetails>
        ))}
      </ProductCardContainer>
      <PaginationWrapper>
        <PageButton disabled={page === 1} onClick={() => setPage(page - 1)}>
          ◀ Prev
        </PageButton>

        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index}
            active={page === index + 1}
            onClick={() => setPage(index + 1)}
          >
            {index + 1}
          </PageButton>
        ))}

        <PageButton
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next ▶
        </PageButton>
      </PaginationWrapper>
    </ProductCardMainContainer>

  );
}

export default ProductCard;