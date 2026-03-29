import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function MakeAppointment() {
    return(
        <div className="makeAppointment">
            <NavBar></NavBar>
            <h1>make an appointment</h1>
            <p>test test test</p>
        </div>
    )
}

export default MakeAppointment