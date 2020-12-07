import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: { title, price },
    onSuccess: () => Router.push('/')
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    await doRequest();
  };
  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onSubmit}>
        <div className={'form-group'}>
          <label>Title</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className={'form-control'}
          />
        </div>
        <div className={'form-group'}>
          <label>Price</label>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            onBlur={onBlur}
            className={'form-control'}
          />
        </div>
        {errors}
        <button className={'btn btn-primary'}>Submit</button>
      </form>
    </div>
  );
};

export default NewTicket;