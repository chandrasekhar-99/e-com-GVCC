import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
`;

export const LoginCard = styled.div`
  width: 90%;
  max-width: 400px;
  padding: 30px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  text-align: center;
  margin-bottom: 25px;
  font-size: 1.8rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4a90e2;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: none;
  border-radius: 8px;
  background: #4a90e2;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #3d7ecb;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 10px;
`;
