import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form'

const Search = ({ searchInputCallback }) => {
  const [searchInput, setSearchInput] = React.useState('')

  React.useEffect(() => {
    searchInputCallback(searchInput);
  }, [searchInput, searchInputCallback])

  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Contacts"
          onChange={event => setSearchInput(event.currentTarget.value)}
          value={searchInput}
        />
        <InputGroup.Append>
          <Button variant="primary" onClick={() => setSearchInput('')}>Clear</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}

export default Search;
