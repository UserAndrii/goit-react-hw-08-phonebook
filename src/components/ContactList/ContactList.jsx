import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import ContactListItem from '../ContactListItem';
import { List, ListWrapper } from './ContactList.styled';

// import { selectFilter } from 'redux/selectors';
// import { useFetchContactsQuery } from 'redux/contactsServiceApi';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const { data: contacts } = useFetchContactsQuery();
  // const filterValue = useSelector(selectFilter);

  return (
    <ListWrapper>
      <List>
        {contacts &&
          contacts
            // .filter(contact => contact.name.toLowerCase().includes(filterValue))
            // .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ id, name, number }) => (
              <ContactListItem key={id} id={id} name={name} number={number} />
            ))}
      </List>
    </ListWrapper>
  );
};

export default ContactList;
