import { useState } from "react";
import { supabase } from "../supabaseClient";
import Popup from '../components/Popup.jsx';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()  // add this inside your component
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
    
    async function handleLogin(e) {
        
        console.log("Email:", email);
        console.log("Password: ", password)
        e.preventDefault();
        // Handle login logic here
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });
        if(error) {
            console.log('Error: ', error);
            setIsPopupVisible(!isPopupVisible);
        } else {
            console.log('Logged In: ', data);
            navigate('/dashboard');
            setIsPopupVisible(false);

        }
        console.log('Login form submitted');
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="username" name="username" onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}required />
                </div>
                <button type="submit">Login</button>
                {isPopupVisible && (
                <div>
                    <p>The wrong email and password is not in the system!</p>
                </div>
                )}
            </form>
        </div>
    );
}