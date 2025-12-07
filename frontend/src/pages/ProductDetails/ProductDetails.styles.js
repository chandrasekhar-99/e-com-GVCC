import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  padding: 20px;      
  
  display: flex;
  flex-direction: column;
  align-items: center;

  
  max-width: 100%;


  @media (min-width: 600px) {
    padding: 30px;
  }

  
  @media (min-width: 1024px) {
    padding: 40px 80px;
    padding-top:60px;
    width:100%;   
  }
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  object-fit: contain;
  margin-bottom: 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 15px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 12px 15px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width:400px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.95rem;
    
  }
`;

export const TextArea = styled.textarea`
  padding: 12px 15px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  width:400px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.95rem;
    min-height: 80px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 6px;
  background-color: #3062a2ff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
  }

  width:200px;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;

export const SuccessText = styled.p`
  color: green;
  margin-bottom: 10px;
  font-size: 0.95rem;
`;

export const ErrorText = styled.p`
  color: red;
  margin-bottom: 10px;
  font-size: 0.95rem;
`;
