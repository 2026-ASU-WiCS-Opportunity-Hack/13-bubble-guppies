import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar';

function AdminFields() {
    return(
        <div className="adminFields">
            <NavBar></NavBar>
            <h2>admin fields</h2>
            <p>test test test</p>
        </div>
    )
}

export default AdminFields