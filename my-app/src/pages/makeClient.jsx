import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { motion } from 'framer-motion'

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
            <h2>Register New Client</h2>
            <form onSubmit={handleSubmit}>
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

                <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    placeholder="Date of Birth"
                />

                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                />

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

                <input
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    placeholder="Gender"
                />

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

                <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Additional Notes"
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register Client'}
                </button>

                {success && <p>Client registered successfully!</p>}
                {error && <p>Error: {error}</p>}
            </form>
        </div>
    );
}


export default MakeClient