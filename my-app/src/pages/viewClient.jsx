import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function ViewClient() {
    return(
        <div className="viewClient">
            <NavBar></NavBar>
            <h1>view client profile</h1>
            <p>test test test</p>
        </div>
    )
}

export default ViewClient