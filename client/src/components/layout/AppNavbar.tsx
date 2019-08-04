import React, { FunctionComponent } from 'react';
import { Collapse, Navbar, NavbarToggler, Container } from 'reactstrap';
import useBoolean, { UseBoolean } from 'hooks/useBoolean';
import AppBrand from 'components/layout/AppBrand';
import AppNav from 'components/layout/AppNav';

const AppNavbar: FunctionComponent = () => {
  const { value: isOpen, toggle }: UseBoolean = useBoolean();

  return (
    <Navbar className="mb-5" color="light" light expand="sm">
      <Container>
        <AppBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <AppNav right />
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
