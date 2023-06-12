import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from 'redux/contacts/selectors';
import { selectIsLoading, selectErrors } from 'redux/contacts/selectors';
import { filteredContacts } from 'redux/contacts/filtersSlice';
// import { useFetchContactsQuery } from 'redux/contactsServiceApi';

import Loader from '../Loader';
import { Wrapper, Title, Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrors);

  // const { isFetching: isLoading, error } = useFetchContactsQuery();

  const onChangeFilter = ({ target: { value } }) => {
    dispatch(filteredContacts(value.toLowerCase()));
  };

  return (
    <Wrapper>
      <div style={{ width: 210 }}>
        <Title>Contacts</Title>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input
          type="text"
          name="filter"
          id="filter"
          value={filterValue}
          onChange={onChangeFilter}
        />
        {error && (
          <b style={{ color: '#78909c' }}>
            Opps..., please try to refresh the page
          </b>
        )}
      </div>
      {isLoading && !error && <Loader />}
    </Wrapper>
  );
};

export default Filter;
