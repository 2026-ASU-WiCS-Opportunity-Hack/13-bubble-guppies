import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function AdminFields() {
    <NavBar></NavBar>
    return(
        <div className="adminFields">
            <h2>admin fields</h2>
            <p>test test test</p>
        </div>
    )
}

export default AdminFields