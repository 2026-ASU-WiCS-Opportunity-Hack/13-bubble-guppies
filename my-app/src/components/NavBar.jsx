import {Squash as Hamburger} from 'hamburger-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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