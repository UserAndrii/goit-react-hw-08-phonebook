import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import {
  Form,
  Label,
  Input,
  Button,
  FormWrapper,
  Title,
} from './ContactForm.styled';

// import {
//   useAddContactMutation,
//   useFetchContactsQuery,
// } from 'redux/contactsServiceApi';
// import Loader from '../Loader';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // const [addContact, { isLoading: additionContact }] = useAddContactMutation();
  // const { data: contacts } = useFetchContactsQuery();

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;

    if (onDuplicateCheck(name.value.trim())) {
      toast.error(`${name.value} is already in contacts`);
      e.currentTarget.reset();
      name.focus();
      return;
    }

    dispatch(
      addContact({ name: name.value.trim(), number: number.value.trim() })
    );
    // addContact({ name: name.value, number: number.value });

    e.target.reset(name.value, number.value);
  };

  const onDuplicateCheck = name => {
    return contacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <div>
      <Title>Add your contact to this form:</Title>
      <FormWrapper>
        <Form onSubmit={onFormSubmit} autoComplete="off">
          <Label htmlFor="name">
            Name
            <Input
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Z\s]+$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>

          <Label htmlFor="number">
            Number
            <Input
              type="tel"
              name="number"
              id="number"
              pattern="^[0-9]+$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Button type="submit">
            Add contact
            {/* {additionContact && <Loader width={'20'} />} */}
          </Button>
        </Form>
      </FormWrapper>
    </div>
  );
};

export default ContactForm;
