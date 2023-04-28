import styled from 'styled-components';
import Select from 'react-select';

export const StyledDropDown = styled(Select)`
  width: 200px;
  color: ${props => props.theme.black};
`;

export const DropDownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`;
