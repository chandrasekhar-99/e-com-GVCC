import styled from 'styled-components';

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
  padding: 0 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const SearchInputField = styled.input`
  width: 60%;
  max-width: 500px;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;

  
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 10px;

  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
