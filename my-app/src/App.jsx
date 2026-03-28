import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Dashboard from './pages/dashboard.jsx';
import AdminFields from './pages/adminFields.jsx';
import AdminUsers from './pages/adminUsers.jsx';
import MakeAppointment from './pages/makeAppointment.jsx';
import Calendar from './pages/calendar.jsx';
import MakeClient from './pages/makeClient.jsx';
import ViewClient from './pages/viewClient.jsx';
import AllClients from './pages/allClients.jsx';

function App() {
  return (

    // PAGE ROUTER:
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/admin/fields" element={<AdminFields />} />
          <Route path="/admin/users" element={<AdminUsers />} /> 
          <Route path="/appointment/new" element={<MakeAppointment/>} />
          <Route path="/calendar" element={<Calendar/>} />
          <Route path="/client/new" element={<MakeClient/>} />
          <Route path="/client/view" element={<ViewClient/>} />
          <Route path="/client/all" element={<AllClients/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
