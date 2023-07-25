import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { url } from '../../../helpers';

import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled.form`
    display: flex;
    width: 100%;
    height: auto;
    margin-left: 30px;
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
    width: 450px;
    display: flex;
    padding: 5px;
    background-color: #FEFDFD;
    height: 20px;
`;

const SearchResultContainer = styled.menu`
    display: flex;
    position: absolute;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 999;
    width: 455px;
    height: auto;
    top: 43px;
    margin-left: 30px;
    padding: 20px 0px 0px 10px;
    border: 0.5px solid #CCD3C2;
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
    height: auto;
    margin: 0px;
    padding: 0px;
`

const SearchResultItem = styled.li`
    display: flex;
    height: 44px;
    margin: 0px;
    padding: 0px;
`

const RouterLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchResultBox, setSearchResultBox] = useState(false);
    const [searchResults, setSearchResults] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
          try {
            const response = await axios.get(`${url}products`);
            setProducts(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        getProduct();
      }, []);

    //change loading screen
    if (!products) {
        return <div></div>;
    }

    //closes dropdown
    const handleClickAway = () => {
        setSearchResultBox(false);
    };

    //yields search results
    const searchFilter = products.filter((item) => item.name.toLowerCase().includes(searchResults));

    //map to pass to data to searchResults Page
    const id = searchFilter.map(i => i.id)

    //search function to pass data to searchResults page
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchFilter.length > 1) {
          navigate(`/searchResults/${id}`);
        } else if (searchFilter.length === 1) {
          navigate(`/products/${id}`);
        } else {
          // Display the "No results found" message here
        }
      };

    return (
        <>
            <SearchContainer onSubmit={handleSearch}>
                <InputRow>
                    <Input
                        placeholder="Search For Plants"
                        onChange={(e) => {
                            setSearchResults((e.target.value).toLowerCase());
                            setSearchResultBox(true)
                        }} />
                   <RouterLink to={searchFilter.length > 0 ? (searchFilter.length > 1 ? `/searchResults/${id}` : `/products/${id}`) : false}>
                        <QueryIcon />
                    </RouterLink>
                </InputRow>
            </SearchContainer>

            {searchResultBox ?
                <ClickAwayListener onClickAway={handleClickAway}>
                    <SearchResultContainer>
                        {searchResults === '' ? setSearchResultBox(false) :
                            searchFilter.length === 0 ? (
                                <SearchUnorderedList>
                                    <SearchResultItem>
                                        Sorry, no results found.
                                    </SearchResultItem>
                                </SearchUnorderedList>
                            ) : (
                                searchFilter.slice(0, 5).map((item) => (
                                    <SearchUnorderedList key={item.id}>
                                        <SearchResultItem>
                                         <RouterLink to={`/products/${item.id}`} onClick={() => setSearchResultBox(false)}>{item.name}</RouterLink>
                                        </SearchResultItem>
                                    </SearchUnorderedList>
                                ))
                            )
                        }
                    </SearchResultContainer>
                </ClickAwayListener> : null}
        </>
    )
}

export default SearchBar
