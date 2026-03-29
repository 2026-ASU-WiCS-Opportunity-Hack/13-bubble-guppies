import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar';

function Dashboard() {
    
    return(
    <div className="container">
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
        >
            <NavBar></NavBar>
            <h1>Welcome to Your Dashboard!</h1>
              <div className="services-container">
                <div className="box">
                  <p>Active Clients</p>
                </div>
              <div className="box">
                <p>Services this Month</p>
              </div>
              <div className="box">
                <p>Upcoming Appointments</p>
              </div>
            </div>
          </motion.div>
    </div>
    )
}

export default Dashboard