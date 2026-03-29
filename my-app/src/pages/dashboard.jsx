import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    return(
    <div className="container">
        <h1>this is the dashboard</h1>
        <p>test test test</p>
    </div>
    )
}

export default Dashboard