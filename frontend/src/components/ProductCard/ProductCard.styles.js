import styled from "styled-components";

export const ProductCardMainContainer = styled.div`
  padding-top:30px
`;

/* MAIN CONTAINER FOR ALL CARDS */
export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Desktop: center items with spacing */
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
`;

/* PRODUCT IMAGE */
export const ProductImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    height: 330px;
    width:280px;
  }

`;


/* CARD WRAPPER */
export const ProductDetails = styled.div`
  width: 90%;
  max-width: 350px;
  background: #fff;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px auto;

  @media (min-width: 768px) {
    width: 400px;
    height: 90%;

  }
`;


/* TITLE */
export const ProductTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #222;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

/* PRICE */
export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #444;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

/* DESCRIPTION */
export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

/* PAGINATION */
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
  flex-wrap: wrap;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

/* INDIVIDUAL BUTTON */
export const PageButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  padding: 10px 16px;
  font-size: 0.95rem;

  border: none;
  border-radius: 6px;
  cursor: pointer;

  background: ${(props) => (props.active ? "#111" : "#eee")};
  color: ${(props) => (props.active ? "#fff" : "#000")};

  transition: 0.2s ease;

  &:hover {
    background: ${(props) => (props.active ? "#000" : "#ddd")};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    padding: 10px 18px;
    font-size: 1rem;
  }
`;

export const Sortcontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  /* Mobile view */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;
