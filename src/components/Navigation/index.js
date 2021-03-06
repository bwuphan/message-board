import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to={ROUTES.BOARD}>
      <img width="80"
        src="https://logos-download.com/wp-content/uploads/2016/04/Sacramento_Kings_logo_transparent_bg.png"
        alt="kings_logo"
        />
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
  </nav>
);

const NavigationAuth = () => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <span className="nav-link" href="#">
          <Link className="text-decoration-none" to={ROUTES.ACCOUNT}>Account</Link>
        </span>
      </li>
      <li className="nav-item">
        <span className="nav-link" href="#">
          <Link className="text-decoration-none" to={ROUTES.ADMIN}>Admin</Link>
        </span>
      </li>
    </ul>
    <SignOutButton />
  </div>

);

const NavigationNonAuth = () => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mr-auto">
    </ul>
    <div className="nav-item">
      <span className="nav-link" href="#">
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </span>
    </div>
  </div>
);

export default Navigation;