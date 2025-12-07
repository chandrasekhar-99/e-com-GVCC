import { SearchInputContainer, SearchInputField } from './SearchInput.styles';

const SearchInput = ({onChange, value}) => {
  return (
    <SearchInputContainer>
      <SearchInputField type="text" placeholder="Search products..." value={value} onChange={onChange}/>
    </SearchInputContainer>
  );
};

export default SearchInput;