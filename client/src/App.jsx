import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from './features/auth/RequireAuth'

// import Public from "components/Public";
import Layout from "components/Layout";
import Login from "features/auth/Login";
// import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts";

const App = () => {
  return (
    <Routes>
 
      
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        {/* <Route index element={<Public />} /> */}
        <Route index element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="admin/*" element={<AdminLayout />} />
        </Route>

        <Route path="*" element=<Navigate to="/" /> />

      </Route>
    
    </Routes>
  );
};

export default App;
