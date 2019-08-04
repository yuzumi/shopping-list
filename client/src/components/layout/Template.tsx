import React, { FunctionComponent } from 'react';
import AppNavbar from 'components/layout/AppNavbar';

const Template: FunctionComponent = ({ children }) => (
  <>
    <AppNavbar />
    {children}
  </>
);

export default Template;
