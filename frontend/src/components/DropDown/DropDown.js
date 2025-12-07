import styled from 'styled-components';


export const SelectContainer = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 1rem;
  margin: 10px 0;

  &:focus {
    border-color: #555;
  }
`;

export const OptionItem = styled.option`
  padding: 10px;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;