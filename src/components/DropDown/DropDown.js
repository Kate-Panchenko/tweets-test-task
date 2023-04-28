import { useState } from 'react';
import { DropDownWrapper, StyledDropDown } from './DropDown.styled';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'following', label: 'Following' },
];
const defaultOption = { value: 'all', label: 'All' };

export const DropDown = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    onChange(selectedOption.value);
  };

  return (
    <DropDownWrapper>
      <StyledDropDown
        value={selectedOption}
        options={options}
        onChange={handleChange}
      />
    </DropDownWrapper>
  );
};
