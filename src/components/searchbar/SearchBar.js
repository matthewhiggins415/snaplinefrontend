import React from 'react'
import { SearchContainer, Form, Input, Btn } from '../../styles/components/SearchBar.styles'

const SearchBar = () => {
  return (
    <SearchContainer>
      <Form>
        <Input type="text" placeholder="find a photographer" required/>
        <Btn type="submit">search</Btn>
      </Form>
    </SearchContainer>
  )
}

export default SearchBar