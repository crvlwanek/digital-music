import React, { Fragment } from 'react';
import Form from './Form';
import Songs from './Songs';
import Porfolio from './Portfolio';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Songs />
      <Porfolio />
    </Fragment>
  );
}
