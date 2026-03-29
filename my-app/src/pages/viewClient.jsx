import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function ViewClient() {
    return(
        <div className="viewClient">
            <h2>view client profile</h2>
            <p>test test test</p>
        </div>
    )
}

export default ViewClient