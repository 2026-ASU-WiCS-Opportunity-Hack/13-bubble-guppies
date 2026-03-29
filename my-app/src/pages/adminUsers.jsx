import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function AdminUsers() {
    return(
        <div className="adminUsers">
            <h2>admin users page</h2>
            <p>test test test</p>
        </div>
    )
}

export default AdminUsers