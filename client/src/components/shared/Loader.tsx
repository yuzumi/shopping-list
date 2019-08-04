import React, { FunctionComponent } from 'react';
import { Spinner } from 'reactstrap';

const Loader: FunctionComponent = () => (
  <div className="d-flex justify-content-center py-2">
    <Spinner color="secondary" />
  </div>
);

export default Loader;
