import React from 'react';
import '../css/main.css';
import { Link, Route, Routes } from 'react-router-dom';
import Book from './Book';
import Category from './Categories';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-1">
          <ul>
            <li className="bookstore">Bookstore&nbsp;CMS</li>
            <li className="books"><Link to="/">Books</Link></li>
            <li className="categories"><Link to="/categories">Categories</Link></li>
          </ul>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/categories" element={<Category />} />
          </Routes>
        </div>
        <div className="nav-2">
          <div className="oval">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="#0290ff" d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
            </svg>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
