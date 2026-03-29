import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion'

function MakeAppointment() {
    return(
        <div className="makeAppointment">
            <div className="calendar">
             <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
            >   
                <NavBar></NavBar>
                <h1>make an appointment</h1>
                <p>test test test</p>
            </motion.div>
            </div>
        </div>
    )
}

export default MakeAppointment