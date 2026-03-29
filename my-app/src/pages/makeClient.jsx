import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

/* object / animation imports */
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion'
import Card from '../components/Card';
import './pages.css';

function MakeClient() {
    const { user } = useAuth();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        date_of_birth: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        gender: '',
        ethnicity: '',
        primary_language: '',
        priority: '',
        case_manager: '',
        cm_id: user.id,
        notes: ''
    });

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAllUsers() {
            const { data, error } = await supabase
                .from('users')
                .select('user_id, name');

            if (error) {
                console.error('Error fetching users:', error);
                return;
            }

            setUsers(data ?? []);
        }

        getAllUsers();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase
            .from('clients')
            .insert([{ ...formData, cm_id: user?.id ?? null }]);

        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                date_of_birth: '',
                address: '',
                city: '',
                state: '',
                zip_code: '',
                gender: '',
                ethnicity: '',
                primary_language: '',
                priority: '',
                case_manager: '',
                cm_id: user?.id ?? null,
                notes: ''
            });
        }
    };

    return(
        <div className="makeClient">
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.5}}
            >
            <h2>Register New Client</h2>
            <form onSubmit={handleSubmit}>
                {/* PERSONAL INFO CARD */ } 
                <Card title="Personal Information" className="cols-2">
                    {/* FIRST ROW */ }
                    <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                />

                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                />

                {/* SECOND ROW */ }
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />

                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                />

                {/* THIRD ROW */ }

                <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    placeholder="Date of Birth"
                />

                <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    placeholder="Gender"
                />

                </Card>
                
                {/* ADDRESS CARD */ }

                <Card title="Address">

                {/* ROW 1 - 1 COL */ }
                <div className="cols-1">
                    <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    />
                </div>
                {/* ROW 2 - 3 COLS */ }
                <div className="cols-3">
                    <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                />

                <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                />

                <input
                    type="text"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleChange}
                    placeholder="Zip Code"
                />
                </div>

                </Card>
                
                {/* Background */ }
                <Card title="Background" className="cols-2">
                    <input
                        type="text"
                        name="ethnicity"
                        value={formData.ethnicity}
                        onChange={handleChange}
                        placeholder="Ethnicity"
                    />

                    <input
                        type="text"
                        name="primary_language"
                        value={formData.primary_language}
                        onChange={handleChange}
                        placeholder="Primary Language"
                    />
                </Card>
                
                {/* DETAILS CARD */ }
                <Card title="Details" className="cols-2">
                    {/* FIRST ROW - 2 cols */ }
                        <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value="">Select Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <select
                        name="case_manager"
                        value={formData.case_manager}
                        onChange={handleChange}
                    >
                        <option value="">Select Case Manager</option>
                        {users.map(cm => (
                            <option key={cm.id} value={cm.name}>{cm.name}</option>
                        ))}
                    </select>
                {/* 2nd ROW - notes */ }
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Additional Notes"
                    />
                </Card>
                <motion.div
                whileHover={{ scale : 1.05}}
                transition={{ duration : 0.5, ease: "easeOut"}}
                >
                    <div className="submit">
                        <button type="submit" disabled={loading}>
                            {loading ? 'Registering...' : 'Register Client'}
                        </button>
                    </div>
                </motion.div>

                {success && <p>Client registered successfully!</p>}
                {error && <p>Error: {error}</p>}
            </form>
            <NavBar></NavBar>
          </motion.div>
        </div>
    );
}


export default MakeClient