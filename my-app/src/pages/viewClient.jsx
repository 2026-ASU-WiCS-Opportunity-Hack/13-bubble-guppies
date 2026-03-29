    import { supabase } from "../supabaseClient";
    import { useState, useEffect } from "react";
    import { useNavigate, useParams } from 'react-router-dom';
    import { ArrowLeft } from 'lucide-react';
    import NavBar from '../components/NavBar';
    import { motion } from 'framer-motion'


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
                <NavBar></NavBar>

                <button onClick={() => navigate('/client/all')} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <ArrowLeft size={20} style={{ marginRight: '5px' }} />
                    Back
                </button>

                <h1>{client.first_name} {client.last_name}</h1>
                <h3>Priority: {client.priority}</h3>

                <div className="Demographics">
                    <h2>Demographics</h2>
                    <p><strong>Email:</strong> {client.email}</p>
                    <p><strong>Phone:</strong> {client.phone}</p>
                    <p><strong>Address:</strong> {client.address}</p>
                    <p><strong>DOB:</strong> {client.date_of_birth ? new Date(client.date_of_birth).toLocaleDateString() : 'N/A'}</p>
                    <p><strong>Gender:</strong> {client.gender}</p>
                    <p><strong>Language:</strong> {client.primary_language}</p>
                </div>

                <div className="Notes">
                    <h2>Notes</h2>
                    <p><strong>Case Manager:</strong> {client.case_manager}</p>
                    <p><strong>Notes:</strong> {client.notes}</p>
                </div>
            </div>
        )
    }

    export default ViewClient