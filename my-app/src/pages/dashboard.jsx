import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import NavBar from '../components/NavBar';
import Card from '../components/Card';

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
              <NavLink to="/client/all" style={{textDecoration: 'none'}} onClick={() => setIsOpen(false)}>
                <Card title="Active Clients" className="cols-1">
                  <p><span className="label">{count}</span></p>
                </Card>
              </NavLink>
              <Card title="Services this Month">
                <p><span className="label">15</span></p>
              </Card>
              <Card title="Upcoming Appointments">
                <p><span className="label">TBD</span></p>
              </Card>
            </div>
          </motion.div>
    </div>
    )
}

export default Dashboard