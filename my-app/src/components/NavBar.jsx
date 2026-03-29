import {Squash as Hamburger} from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Plus } from 'lucide-react'

// CSS
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  return (
    <div className ="navBar">
      {/* SEARCH BAR */ }
      <div className="searchbar">
        <input
          type="search"
          placeholder="Search clients..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          />
      </div>
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
      {/* RIGHT BUTTON */ }
      <NavLink to="/client/new">
        <button className="right_button">
          <Plus size={32}/>
        </button>
        
      </NavLink>
    </div>
  )
}

export default NavBar