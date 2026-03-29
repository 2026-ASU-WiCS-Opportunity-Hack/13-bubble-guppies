import { supabase } from "../supabaseClient";
import { useState } from "react";
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
            <h1>this is the dashboard</h1>
            <p>test test test</p>
        </motion.div>
    </div>
    )
}

export default Dashboard