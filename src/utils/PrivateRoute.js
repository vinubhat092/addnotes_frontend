import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Routes>
            <Route {...rest} element={user ? Component  : <Navigate to="/login" />} />
        </Routes>
    );
};

export default PrivateRoute;