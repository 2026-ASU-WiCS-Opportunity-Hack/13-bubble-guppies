import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function MakeClient() {
    const { user } = useAuth();
    const navigate = useNavigate();

    return(
        <div className="makeClient">
            <h2>add a client</h2>
            <p>test test test</p>
        </div>
    )
}

export default MakeClient