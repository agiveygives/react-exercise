import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup'
import ContactInfo from '../ContactInfo/contactInfo';
import { SORT_ASC, SORT_DESC } from '../../constants';

const propTypes = {
  allContacts: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
      address: PropTypes.shape(
        {
          street: PropTypes.string.isRequired,
          suite: PropTypes.string,
          city: PropTypes.string.isRequired,
          zipcode: PropTypes.string.isRequired,
        }
      ),
    }
  )).isRequired,
  searchInput: PropTypes.string,
  sortOption: PropTypes.oneOf([SORT_ASC, SORT_DESC, '']),
  setContactsCallback: PropTypes.func.isRequired,
};

const sortContacts = (contacts, sortDir) => {
  let sortedContacts = Array.from(contacts);

  switch (sortDir) {
    case SORT_ASC:
      sortedContacts.sort(
        (contact1, contact2) => {
          if (contact1.name > contact2.name) return 1
          return -1
        }
      );
      break;
    case SORT_DESC:
      sortedContacts.sort(
        (contact1, contact2) => {
          if (contact1.name < contact2.name) return 1
          return -1
        }
      );
      break;
    default:
      break;
  }

  return sortedContacts;
}

const ContactCardList = ({ allContacts, searchInput, sortOption, setContactsCallback }) => {
  const [sortedContactsList, setSortedContactsList]  = React.useState(allContacts);

  React.useEffect(() => {
    if (searchInput === '') {
      setSortedContactsList(sortContacts(allContacts, sortOption))
    }
    else {
      setSortedContactsList(
        sortContacts(
          allContacts.filter(contact => contact.name.toLowerCase().includes(searchInput.toLowerCase())), sortOption
        )
      )
    }
  }, [searchInput, sortOption, allContacts])

  return (
    <ListGroup>
      {
        sortedContactsList.map(contact => (
          <ListGroup.Item key={contact.id}>
            <ContactInfo
              address={contact.address}
              email={contact.email}
              name={contact.name}
              onRemove={() => setContactsCallback(allContacts.filter(filterContact => filterContact.id !== contact.id ))}
            />
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}

ContactCardList.defaultProp = {
  searchInput: '',
  sortOption: '',
}

ContactCardList.propTypes = propTypes;

export default ContactCardList;
