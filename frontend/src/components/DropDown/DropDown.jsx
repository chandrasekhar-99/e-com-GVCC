import { DropdownContainer, Select, Option } from "./DropDown.styles";

const DropDown = ({options=[], onChange, value }) => {
  return (
    <DropdownContainer>
      <Select value={value} onChange={onChange}>
        <Option value={value}>All Categories</Option>
        {options.map((cat, index) => (
          <Option key={index} value={cat}>
            {cat}
          </Option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default DropDown;
