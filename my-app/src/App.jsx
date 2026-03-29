import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute.jsx';
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
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/fields" element={<ProtectedRoute><AdminFields /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
          <Route path="/appointment/new" element={<ProtectedRoute><MakeAppointment /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
          <Route path="/client/new" element={<ProtectedRoute><MakeClient /></ProtectedRoute>} />
          <Route path="/client/view/:id" element={<ProtectedRoute><ViewClient /></ProtectedRoute>} />
          <Route path="/client/all" element={<ProtectedRoute><AllClients /></ProtectedRoute>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
