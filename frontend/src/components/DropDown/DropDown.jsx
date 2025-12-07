import {SelectContainer, SelectBox, Option} from './DropDown.styles';


const DropDown = ({options, onChange, value}) =>  {
  return (
    <SelectBox>
      <SelectContainer value={value} onChange={onChange}>
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </SelectContainer>
    </SelectBox>
  );
};

export default DropDown;