import { supabase } from "../supabaseClient";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion'

function AllClients() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase
                .from('clients')
                .select('client_id, first_name, last_name, priority, case_manager, phone, created_at')
                .order('created_at', { ascending: false });

            if (!error) setData(data);
            setLoading(false);
        }
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (data.length === 0) return <p>No clients found.</p>;

    return(
        <div className="allClients">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5}}
            >   
                <NavBar></NavBar>
                <h1>Clients</h1>
                <div style={{ overflowX: 'auto' }}>
                    <table>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Priority</th>
                            <th>Case Manager</th>
                            <th>Phone</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((client) => (
                            <tr key={client.client_id}
                                onClick={() => navigate(`/client/view/${client.client_id}`)}
                                style={{ cursor: 'pointer' }}
                            >
                                <td>{client.first_name}</td>
                                <td>{client.last_name}</td>
                                <td>{client.priority}</td>
                                <td>{client.case_manager}</td>
                                <td>{client.phone}</td>
                                <td>{new Date(client.created_at).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </motion.div>
        </div>
    );
}

export default AllClients