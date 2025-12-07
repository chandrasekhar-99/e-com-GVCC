import styled from "styled-components";

// Main container for the enquiries page
export const EnquiriesContainer = styled.div`
  width: 100%;
  
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000; /* Full black background */
  min-height: 100vh;
  box-sizing: border-box;
`;

// Page heading
export const EnquiriesHeading = styled.h1`
  color: #ffffff;
  margin-bottom: 30px;
  text-align: center;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// Each enquiry card
export const EnquiryCard = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #1a1a1a; /* Dark gray for contrast with black background */
  color: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

// Title of each enquiry card
export const EnquiryTitle = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Info section (name, email, phone, product id, created_at)
export const EnquiryInfo = styled.div`
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 10px;

  strong {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

// Message section
export const EnquiryMessage = styled.div`
  font-style: italic;
  background-color: #333; /* Slightly lighter than card */
  color: #fff;
  padding: 10px;
  border-radius: 6px;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

// Error text
export const ErrorText = styled.p`
  color: red;
  text-align: center;
  margin-top: 20px;
`;

// Loading text
export const LoadingText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #fff;
`;

// Optional: product image inside enquiry card
export const ProductImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border-radius: 6px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

// Product title inside enquiry card
export const ProductTitle = styled.p`
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
