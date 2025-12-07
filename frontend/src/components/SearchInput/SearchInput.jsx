import { SearchInputContainer, SearchInputField } from './SearchInput.styles';

const SearchInput = () => {
  return (
    <SearchInputContainer>
      <SearchInputField type="text" placeholder="Search products..." />
    </SearchInputContainer>
  );
};

export default SearchInput;