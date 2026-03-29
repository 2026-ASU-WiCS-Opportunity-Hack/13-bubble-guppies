    import { supabase } from "../supabaseClient";
    import { useState, useEffect } from "react";
    import { useNavigate, useParams } from 'react-router-dom';
    import { ArrowLeft } from 'lucide-react';
    import NavBar from '../components/NavBar';
    import Card from '../components/Card'; 
    import { easeInOut, motion } from 'framer-motion'

    function getPriorityColor(priority) {
        if (priority === 'High') return 'var(--priority-high)';
        if (priority === 'Medium') return 'var(--priority-medium)';
        if (priority === 'Low') return 'var(--priority-low)';
        return 'var(--accent-bg)';
    }

    function ViewClient() {
        const { id } = useParams();
        const [client, setClient] = useState(null);
        const [loading, setLoading] = useState(true);
        const navigate = useNavigate();

        useEffect(() => {
            async function fetchClient() {
                const { data, error } = await supabase
                    .from('clients')
                    .select('*')
                    .eq('client_id', id)
                    .single();

                if (!error) {
                    setClient(data);
                }
                setLoading(false);
            }
            fetchClient();
        }, [id]);

        if (loading) return <p>Loading...</p>;
        if (!client) return <p>Client not found.</p>;

        return(
            <div className="viewClient">
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}
                >
                <NavBar></NavBar>

                <motion.button onClick={() => navigate('/client/all')} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', borderRadius:'5px', border: 'none', padding: '5px 10px'}}
                    whileHover={{scale:1.05}}
                    transition={{duration:0.5, ease: easeInOut}}
                    >
                    <ArrowLeft size={20} style={{ marginRight: '5px' }} />
                    Back
                </motion.button>

                <h1>{client.first_name} {client.last_name}</h1>
                <h3><span style={{backgroundColor: `${getPriorityColor(client.priority)}`, borderRadius: `15px`, padding: `5px 20px`, color:'var(--on-priority)'}}>{client.priority}</span></h3>
                <Card title="Demographics" className="cols-2">
                    <p><span className="label">Email:</span><span className="value">{client.email || 'N/A'}</span></p>
                    <p><span className="label">Phone:</span><span className="value">{client.phone || 'N/A'}</span></p>
                    <p><span className="label">Address:</span><span className="value">{client.address || 'N/A'}</span></p>
                    <p><span className="label">Date of Birth:</span><span className="value">{client.date_of_birth ? new Date(client.date_of_birth).toLocaleDateString() : 'N/A'}</span></p>
                    <p><span className="label">Gender:</span><span className="value">{client.gender || 'N/A'}</span></p>
                    <p><span className="label">Primary Language:</span><span className="value">{client.primary_language || 'N/A'}</span></p>
                </Card>
                
                <Card title="Notes" className="cols-1">
                    <p><span className="label">Case Manager:</span><span className="value">{client.case_manager || 'No Case Manager Assigned'}</span></p>
                    <p id="notes"><span className="label">Notes:</span><span className="value">{client.notes || 'No Notes Written Yet'}</span></p>
                </Card>
                </motion.div>
            </div>
        )
    }

    export default ViewClient