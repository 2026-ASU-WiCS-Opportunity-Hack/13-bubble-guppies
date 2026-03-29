import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function AllClients() {
    return(
        <div className="allClients">
            <h2>view all clients</h2>
            <p>test test test</p>
        </div>
    )
}

export default AllClients