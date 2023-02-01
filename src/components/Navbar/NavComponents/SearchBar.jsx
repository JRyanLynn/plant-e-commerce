import React, {useState} from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { productArray } from '../../../data';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 30px;
    display: block;
`;

const InputRow = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const QueryIcon = styled(SearchIcon)`
    height: 44px;
    padding: 3px;
    margin-left: -30px;
`

const Input = styled.input`
    display: flex;
    padding: 5px;
    background-color: #FEFDFD;
`;

const SearchResultContainer = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    position: absolute;
    align-items: flex-start;
    justify-content: center;
    top: 150;
    width: 450px;
    height: auto;
    margin-left: 50px;
    border: 0.5px solid #CCD3C2;
    z-index: 999;
    background-color: #FEFDFD;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12),
`

const SearchUnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
`

const SearchResultItem = styled.li`
    display: flex;
    height: 10px;
    list-style-type: none;
`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const SearchBar = () => {
    const [searchResultBox, setSearchResultBox] = useState(false);
    const [searchResults, setSearchResults] = useState('');

    const handleClickAway = () => {
        setSearchResultBox(false);
      };

  return (
    <>
    <SearchContainer>
    <InputRow>
   <Input style = {{width: "450px"}} placeholder="Search For Plants You Love" onChange={(e) => {setSearchResults((e.target.value).toLowerCase()); setSearchResultBox(true)}} />
   <QueryIcon />
   </InputRow>

    </SearchContainer>

{searchResultBox ?
    <ClickAwayListener onClickAway={handleClickAway}>
    <SearchResultContainer>
        
        {searchResults === '' ? '' : productArray.filter((item) => item.name.toLowerCase().includes(searchResults)).slice(0, 5).map((item) => (
                <SearchUnorderedList key = {item.id}>
                <SearchResultItem><RouterLink to={`/products/${productArray.indexOf(item) + 1}`} onClick={() => setSearchResultBox(false)}>{item.name}</RouterLink></SearchResultItem>
                </SearchUnorderedList>
        ))}
    
    </SearchResultContainer> 
    </ClickAwayListener> : null}
    </>
  )
}

export default SearchBar