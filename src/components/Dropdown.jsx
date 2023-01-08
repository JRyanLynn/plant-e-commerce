import React, {useState} from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { mobile, tablet, laptop, desktop} from '../media';



const DropdownMenu = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  max-width: 50px;
  height: auto;
  ${mobile({
    height: '20px',
    fontSize: '16px',
    marginTop: '-50px'
})};
`;

const DropdownContent = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  flex-direction: column;
  background-color: lightgrey;
  ${mobile({
    height: '20px',
    fontSize: '16px'
})};
`;

const DropdownButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  display: flex;
  max-width: 55px;
  height: 26px;
  align-items: center;
  border: 0.5px solid lightgray;
  font-size: 20px;
  ${mobile({
    height: '20px',
    width: 'auto',
    fontSize: '16px'

})};
`;

const ArrowDownIcon = styled(KeyboardArrowDownIcon)`
  display: inline-block;
  height: auto; 

  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  margin-left: 12px;
  background: 'none'
  ${mobile({
    border: 'none'
})};
`;

const DropdownItem = styled.div`
  cursor: pointer;
  font-size: 20px;
  width: 35px;
  height: 20px;
  padding: 8px;
  border: 0.5px solid gray;
  &:hover {
    background-color: white;
  }
  ${mobile({

})}
`




const DropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(1);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = value => {
      setSelectedValue(value);
      toggleMenu();
    };
  return (
    <DropdownMenu>
    <DropdownButton onClick={toggleMenu}>
      {selectedValue}
      <ArrowDownIcon isOpen={isOpen}></ArrowDownIcon>
    </DropdownButton>
    <DropdownContent isOpen={isOpen}>
      {[...Array(5)].map((_, i) => (
        <DropdownItem key={i + 1} onClick={() => handleItemClick(i + 1)}>
          {i + 1}
        </DropdownItem>
      ))}
    </DropdownContent>
  </DropdownMenu>
  )
}

export default DropDown;