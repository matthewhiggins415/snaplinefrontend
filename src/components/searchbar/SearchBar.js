import React, { useState} from 'react';
import { SearchContainer, Form, Input, ResultContainer, ResultLink } from '../../styles/components/SearchBar.styles';
import { searchForPhotographer } from '../../api/photographer';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [results, setResults] = useState([])

  const handleSearch = async (input) => {
    console.log(input)

    try {
      let response = await searchForPhotographer(input)
      console.log("response: ", response)
      setResults(response.data.users)
    } catch(error) {
      console.log(error)
    }
  }

  const handleClick = (id) => {
    // navigate(`/public/photographer/${id}`);
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
          required/>
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