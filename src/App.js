import React from 'react';
import Login from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './hooks/useAuth';
import ManageContent from './pages/ManageContent';
import ManageOfficers from './pages/ManageOfficers';
import UserRoles from './pages/UserRoles';
import Reports from './pages/Reports';
import DashboardLayout from './pages/DashboardLayout';
import Notifications from './pages/Notifications';
import Dashboard from './pages/Dashboard';
import TaxationRules from './pages/TaxationRules';
import AddNewContent from './pages/AddNewContent';
import TaxPaymentReport from './pages/TaxPaymentReport';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import OfficerDetails from './pages/OfficerDetails';
import Tasks from './pages/Tasks';
import ParcelDataPackets from './pages/ParcelDataPackets';
import Location from './pages/Location';
import RegistrationRules from './pages/RegistrationRules';

const App = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<Dashboard />} />
                        <Route path="manage-content" element={<ManageContent />} />

                        <Route
                            path="officer-details/:officerID"
                            element={<OfficerDetails />}
                        >
                            <Route path="tasks" element={<Tasks />} />
                            <Route
                                path="parcel-data-packets"
                                element={<ParcelDataPackets />}
                            />
                            <Route path="location" element={<Location />} />
                        </Route>

                        <Route path="edit-taxation-rules" element={<TaxationRules />} />
                        <Route
                            path="edit-registration-rules"
                            element={<RegistrationRules />}
                        />
                        <Route path="tax-payment-report" element={<TaxPaymentReport />} />
                        <Route path="new-content" element={<AddNewContent />} />
                        <Route path="manage-officers" element={<ManageOfficers />} />
                        <Route path="user-roles" element={<UserRoles />} />
                        <Route path="notifications" element={<Notifications />} />
                        <Route path="reports" element={<Reports />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </LocalizationProvider>
    );
};

export default App;
