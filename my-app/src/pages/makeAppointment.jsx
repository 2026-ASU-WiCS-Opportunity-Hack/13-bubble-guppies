import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function MakeAppointment() {
    return(
        <div className="makeAppointment">
            <h2>make an appointment</h2>
            <p>test test test</p>
        </div>
    )
}

export default MakeAppointment