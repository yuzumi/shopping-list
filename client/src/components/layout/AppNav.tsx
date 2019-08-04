import React, { FunctionComponent } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export interface AppNavProps {
  right?: boolean;
}

const AppNav: FunctionComponent<AppNavProps> = ({ right }) => (
  <Nav className={right ? 'ml-auto' : ''} navbar>
    <NavItem>
      <NavLink href="https://github.com/yuzumi/shopping-list.git">
        GitHub
      </NavLink>
    </NavItem>
  </Nav>
);

export default AppNav;
