import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion'

function AllClients() {
    return(
        <div className="allClients">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
            >   
                <NavBar></NavBar>
                <h1>view all clients</h1>
                <p>test test test</p>
            </motion.div>
        </div>
    )
}

export default AllClients