import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo_header.svg';

import Notifications from '~/components/Notifications';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Anderson Martins</strong>
              <Link to="/dashboard">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
