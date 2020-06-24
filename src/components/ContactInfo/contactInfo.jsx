import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './contactInfo.css'
import { NO_DATA } from '../../constants';

const propTypes = {
  address: PropTypes.shape(
    {
      street: PropTypes.string.isRequired,
      suite: PropTypes.string,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }
  ),
  email: PropTypes.string,
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

const constructAddress = (address) => {
  if (address === NO_DATA) return address;

  let formattedAddress = `${address.street}`;
  if (address.suite) formattedAddress += ` ${address.suite}`
  return `${formattedAddress}, ${address.city}, ${address.zipcode}`
}

const ContactInfo = ({ address, email, name, onRemove }) => (
  <Container>
    <Row>
      <Col sm={8}>
        <p>
          {name}
          <br/>
          Email: {email}
          <br/>
          Address: {constructAddress(address)}
        </p>
      </Col>
      <Col className='remove-button' sm={4}>
        <Button
          variant='primary'
          onClick={onRemove}>Remove
        </Button>
      </Col>
    </Row>
  </Container>
)

ContactInfo.defaultProps = {
  address: NO_DATA,
  email: NO_DATA,
  name: null,
  onRemove: null,
};

ContactInfo.propTypes = propTypes;

export default ContactInfo;
