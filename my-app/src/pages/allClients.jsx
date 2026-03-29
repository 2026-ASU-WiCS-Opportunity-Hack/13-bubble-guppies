import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function AllClients() {
    return(
        <div className="allClients">
            <NavBar></NavBar>
            <h1>view all clients</h1>
            <p>test test test</p>
        </div>
    )
}

export default AllClients