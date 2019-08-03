import React, { FunctionComponent } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import useBoolean, { UseBoolean } from 'hooks/useBoolean';

const AppNavbar: FunctionComponent = () => {
  const { value: isOpen, toggle }: UseBoolean = useBoolean();

  return (
    <Navbar className="mb-5" color="light" light expand="sm">
      <Container>
        <NavbarBrand href="/">Shopping List</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/yuzumi/shopping-list.git">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
