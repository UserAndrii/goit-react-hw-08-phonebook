import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactsWrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const ContactsPage = () => {
  return (
    <ContactsWrapper>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <div>
        <Filter />
        <ContactList />
      </div>
    </ContactsWrapper>
  );
};

export default ContactsPage;
