import React from 'react';
import Axios from 'axios';
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner';
import ContactCardList from '../components/ContactCardList/contactCardList';
import Search from '../components/Search/search';
import SortOptions from '../components/SortOptions/sortOptions';

const Contacts = () => {
  const [defaultContactsList, setDefaultContactsList] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState(null);
  const [sortOption, setSortOption] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        setIsLoading(false)
        setDefaultContactsList(data.data)
      })
      .catch(error => {
        setIsError(true);
      })
  }, [])

  const bodyEl = () => {
    if (isLoading) {
      return (<Spinner animation='border' />)
    }
    else if(isError) {
      return (
        <Alert variant='danger'>
          Error retrieving contacts list.
        </Alert>
      )
    }
    else {
      return (
        <ContactCardList
          allContacts={defaultContactsList}
          searchInput={searchInput}
          sortOption={sortOption}
          setContactsCallback={setDefaultContactsList}
        />
      )
    }
  }

  return(
    <div>
      <Search searchInputCallback={setSearchInput} />
      <SortOptions sortOptionCallback={setSortOption} />
      {bodyEl()}
    </div>
  )
}

export default Contacts;
