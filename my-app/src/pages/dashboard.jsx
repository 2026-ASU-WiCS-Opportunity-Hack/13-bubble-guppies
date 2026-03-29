import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar';

function Dashboard() {
    const [count, setCount] = useState(0);
    useEffect(() => {

        async function getAllClients() {
            const { count, error } = await supabase
            .from('clients')
            .select('*', { count: 'exact', head: true })
            if(error)
                console.log(error)
            else{
                setCount(count);
                console.log(count);
            }
        }

    getAllClients();
    }, []);
    
    return(
    <div className="container">
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
        >
            <NavBar></NavBar>
            <h1>Welcome to Your Dashboard!</h1>
              <div className="services-container">
                <div className="box">
                  <p>Active Clients</p>
                  <p style={{paddingTop: '15px', fontSize:'24px'}}>{count}</p>
                </div>
              <div className="box">
                <p>Services this Month</p>
                <p style={{paddingTop: '15px', fontSize:'24px'}}>15</p>
              </div>
              <div className="box">
                <p>Upcoming Appointments</p>
              </div>
            </div>
          </motion.div>
    </div>
    )
}

export default Dashboard