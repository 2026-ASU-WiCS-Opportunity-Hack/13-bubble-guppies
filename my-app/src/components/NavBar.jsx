import {Squash as Hamburger} from 'hamburger-react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { supabase } from "../supabaseClient";
import SearchResultsList from './SearchResultsList';
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext';

// CSS
import './NavBar.css';

function NavBar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [clients, setClients] = useState([])
  const [isResultsVisible, setIsResultsVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

useEffect(() => {
  

  async function getRole() {
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('email', user.email)  // make sure your column is named 'id' not 'user_id'
    console.log(data);
    if (error) console.log(error);
    else {
      setIsAdmin(data[0].role=== 'Admin');
    }
  }

  getRole();
}, [user]);

useEffect(() => {
  if (!search.trim()) {
    setClients([]);
    return;
  }

  async function getAllClients() {
    const { data, error } = await supabase
      .from('clients')
      .select('client_id, first_name, last_name')
      .or(`first_name.ilike.%${search}%,last_name.ilike.%${search}%`)
      .limit(8);

    if (error) console.log(error);
    else setClients(data ?? []);
  }

  getAllClients();
}, [search]);





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
        <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="sidebar"
            initial= {{x:-240}}
            animate={{x:0}}
            exit={{x:-240}}
            transition={{duration: 0.5}}>
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
              {isAdmin && 
                <li>
                  <NavLink to="/admin/fields" onClick={() => setIsOpen(false)}>Edit Fields</NavLink>
                </li>
              }
              {isAdmin && 
                <li>
                  <NavLink to="/admin/users" onClick={() => setIsOpen(false)}>Manage Users</NavLink>
                </li>
                }

            </ul>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
      {/* RIGHT BUTTON */ }
      <NavLink to="/client/new">
        <motion.button className="right_button">
          <motion.div
            whileHover={{rotate:360, transition: {duration: 1}}}
          >
            <Plus size={40}/>
          </motion.div>
        </motion.button>
        
      </NavLink>
    </div>
  )
}

export default NavBar