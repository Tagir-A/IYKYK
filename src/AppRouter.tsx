// src/AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/user-details/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
