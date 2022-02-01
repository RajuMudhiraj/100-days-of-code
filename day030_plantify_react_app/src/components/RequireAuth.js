import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import UserHome from '../pages/UserHome'

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <UserHome />
            : auth?.user
                ? <Navigate to="/unAuthorized" state={{ from: location }} replace />
                : <Navigate to="/signIn" state={{ from: location }} replace />
    );
}

export default RequireAuth;