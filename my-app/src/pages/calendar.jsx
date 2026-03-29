import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Calendar() {
    return(
        <div className="calendar">
            <NavBar></NavBar>
            <h1>calendar</h1>
            <p>test test test</p>
        </div>
    )
}

export default Calendar