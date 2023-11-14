import React, { useState } from 'react';
import { SearchContainer, Form, Input, ResultContainer, ResultLink, ClearBtn } from '../../styles/components/SearchBar.styles';
import { searchForPhotographer } from '../../api/photographer';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([])

  const handleSearch = async (input) => {
    console.log(input)

    if (input.length > 0) {
      try {
        const cleanedInput = input.replace(/[^A-Za-z]/g, '');
        let response = await searchForPhotographer(cleanedInput)
        console.log("response: ", response)
        setResults(response.data.users)
      } catch(error) {
        console.log(error)
      }
    } else {
      setInput("");
      setResults([]);
    }
  }

  const handleClick = (id) => {
    setInput("");
    setResults([]);
  }

  return (
    <SearchContainer>
      <Form>
        <Input 
          type="text" 
          name="input" 
          value={input} 
          onChange={(e) => {
            setInput(e.target.value)
            handleSearch(e.target.value)
          }}
          placeholder="find a photographer"
          required
        />
          {results.length > 0 ? <ClearBtn onClick={handleClick}>x</ClearBtn> : ''}
      </Form>
      <ResultContainer>
        {results.map((result) => (
          <ResultLink 
            key={result._id}
            to={`/public/photographer/${result._id}`}
            onClick={() => handleClick(result._id)}
          >{result.fullName}</ResultLink>
        ))}
      </ResultContainer>
    </SearchContainer>
  )
}

export default SearchBar