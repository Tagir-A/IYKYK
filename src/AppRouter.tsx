import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserListPage from "./pages/UserListPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import SlideRoutes from "react-slide-routes";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/user-list" element={<UserListPage />} />
        <Route path="/user-details/:id" element={<UserDetailsPage />} />
      </SlideRoutes>
    </Router>
  );
};

export default AppRouter;
