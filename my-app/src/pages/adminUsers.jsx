import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar';

function AdminUsers() {
    return(
        <div className="adminUsers">
            <NavBar></NavBar>
            <h1>Admin Users Page</h1>
            <p>TBD</p>
        </div>
    )
}

export default AdminUsers