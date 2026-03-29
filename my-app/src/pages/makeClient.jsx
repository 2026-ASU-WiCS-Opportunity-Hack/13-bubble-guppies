import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function MakeClient() {
    const { user } = useAuth();
    const navigate = useNavigate();

    return(
        <div className="makeClient">
            <NavBar></NavBar>
            <h1>add a client</h1>
            <p>test test test</p>
        </div>
    )
}

export default MakeClient