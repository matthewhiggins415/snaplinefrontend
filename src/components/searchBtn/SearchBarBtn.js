import React from 'react';
import { SeachBarContainer, SearchParamContainer } from '../../styles/components/Searchbar.styles';
import { SearchIcon } from '../../styles/icons/SearchIcon'

const SearchBarBtn = ({ handleShow }) => {
  return (
    <SeachBarContainer onClick={handleShow}>
      <SearchParamContainer>
        <p>sport</p>
        <p>location</p>
        <p>date</p>
      </SearchParamContainer>
      <SearchIcon />
    </SeachBarContainer>
  )
}

export default SearchBarBtn