import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion'

function Calendar() {
    return(
        <div className="calendar">
             <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
            >   
                <NavBar></NavBar>
                <h1>calendar</h1>
                <p>test test test</p>
            </motion.div>
        </div>
    )
}

export default Calendar