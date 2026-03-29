import {Squash as Hamburger} from 'hamburger-react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { supabase } from "../supabaseClient";
import SearchResultsList from './SearchResultsList';

// CSS
import './NavBar.css';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [clients, setClients] = useState([])
  const [isResultsVisible, setIsResultsVisible] = useState(false);

  useEffect(() =>{
      if (!search.trim()) {
          setClients([]);
          return;
      }

      async function getAllClients() {
          const {data, error} = await supabase
          .from('clients')
          .select('first_name, last_name')
          .or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%`)
          .limit(8);

          if(error) {
              console.log(error)
          }
          else {
              setClients(data ?? []);
          }

      }

      getAllClients();
  }, [search])

  return (
    <div className ="navBar">
      {/* SEARCH BAR */ }
      <div className = "search-container">
        <input
          type="search"
          placeholder="Search clients..."
          value={search}
          onFocus={() => setIsResultsVisible(true)}
          onBlur={() => setTimeout(() => setIsResultsVisible(false), 150)}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsResultsVisible(true);
          }}
          className="search-input"
        />

        {isResultsVisible && search.trim() && (
          <div className="search-results">
            <SearchResultsList results={clients} />
          </div>
        )}
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
    </div>
  )
}

export default NavBar