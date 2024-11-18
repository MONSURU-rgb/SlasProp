import { Outlet } from "react-router-dom";
import MainBar from "./MainBar";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div>
      <MainBar />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
