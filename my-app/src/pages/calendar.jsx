import { supabase } from "../supabaseClient";
import { useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Calendar() {
    return(
        <div className="calendar">
            <h2>calendar</h2>
            <p>test test test</p>
        </div>
    )
}

export default Calendar