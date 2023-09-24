import React from 'react';
import { ExitIcon } from '../../styles/icons/ExitIcon';
import { SearchContainer, CloseBtn, Form, FormInput, CenterFormInput, FormBtn } from '../../styles/components/Search.styles';

const SearchBar = ({ show, close }) => {
  return (
    <SearchContainer show={show}>
      <CloseBtn onClick={close}>
        <ExitIcon />
      </CloseBtn>
      <Form>
        <FormInput placeholder='Search Sport'/>
        <CenterFormInput placeholder='Search Location'/>
        <FormInput placeholder='Search Date'/>
        <FormBtn>Search</FormBtn>
      </Form>
    </SearchContainer>
  )
}

export default SearchBar