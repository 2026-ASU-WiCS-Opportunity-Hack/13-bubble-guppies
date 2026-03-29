import {Squash as Hamburger} from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="left_hamburger">
      
      {/* hamburger itself */}
      <Hamburger toggled={isOpen} toggle={setIsOpen} />

      {/* sidebar shows if isOpen = true*/}
      {/* onClick -> close the hamburger */}

      {isOpen && (
        <nav className="sidebar">
          <ul>
            <li>
              <NavLink to="/dashboard" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/calendar" onClick={() => setIsOpen(false)}>Calendar</NavLink>
            </li>
            <li>
              <NavLink to="/client/all" onClick={() => setIsOpen(false)}>Clients</NavLink>
            </li>
            <li>
              <NavLink to="/client/new" onClick={() => setIsOpen(false)}>Create Client</NavLink>
            </li>
            <li>
              <NavLink to="/appointment/new" onClick={() => setIsOpen(false)}>Create Event</NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default NavBar