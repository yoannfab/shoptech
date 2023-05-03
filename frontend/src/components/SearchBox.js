import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import classNames from 'classnames';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  const formControlClassNames = classNames('my-search-input');

  const buttonClassNames = classNames('btn-md', {
    'my-search-button': true, // my custom class name
  });

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className={formControlClassNames}
        style={{ width: '430px'}}
      />
      <Button
        style={{ backgroundColor: '#febd69' }}
        type='submit'
        variant='#febd69'
        className={buttonClassNames}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
