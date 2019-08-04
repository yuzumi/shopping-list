import React, { FunctionComponent } from 'react';
import { Container } from 'reactstrap';

const Section: FunctionComponent = ({ children }) => (
  <Container className="mt-4">{children}</Container>
);

export default Section;
