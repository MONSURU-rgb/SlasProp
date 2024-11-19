import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Route, Routes } from "react-router-dom";
import AddNewContent from "./components/AddNewContent.tsx";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import Login from "./components/login-page.tsx";
import ManageContent from "./components/ManageContent.tsx";
import ManageOfficers from "./components/ManageOfficers.tsx";
import Notifications from "./components/Notifications.tsx";
import OfficerDetails from "./components/OfficerDetails.tsx";
import ParcelDataPackets from "./components/ParcelDataPackets.tsx";
import RegistrationRules from "./components/RegistrationRules.tsx";
import Reports from "./components/Reports.tsx";
import Tasks from "./components/Tasks.tsx";
import TaxationRules from "./components/TaxationRules.tsx";
import TaxPaymentReport from "./components/TaxPaymentReport.tsx";
import UserRoles from "./components/UserRoles.tsx";
import { AuthProvider } from "./hooks/useAuth";
import Location from "./pages/Location.tsx";
import ProtectedRoute from "./routes/ProtectedRoute";

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
