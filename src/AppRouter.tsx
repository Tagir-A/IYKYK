import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

import SlideRoutes from "react-slide-routes";

const UserListPage = React.lazy(() => import("./pages/UserListPage"));
const UserDetailsPage = React.lazy(() => import("./pages/UserDetailsPage"));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user-list"
          element={
            <React.Suspense fallback={<>...</>}>
              <UserListPage />
            </React.Suspense>
          }
        />
        <Route
          path="/user-details/:id"
          element={
            <React.Suspense fallback={<>...</>}>
              <UserDetailsPage />
            </React.Suspense>
          }
        />
      </SlideRoutes>
    </Router>
  );
};

export default AppRouter;
