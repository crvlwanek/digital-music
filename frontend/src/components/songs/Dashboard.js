import React, { Fragment } from 'react';
import Form from './Form';
import Portfolio from './Portfolio';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Portfolio />
    </Fragment>
  );
}
