import { useLocation, Navigate, Outlet} from 'react-router-dom';
// import useAuth from "../hooks/useAuth";
import UserHome from '../pages/UserHome'

const RequireAuth = ({ allowedRoles }) => {
    // const { auth, setAuth } = useAuth();
    const user = "user"
    // sessionStorage.getItem('user')
    const roles = sessionStorage.getItem('roles').split(",")
    const location = useLocation();
    console.log(roles)

    return (
        roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : user
                ? <Navigate to="/unAuthorized" state={{ from: location }} replace />
                : <Navigate to="/signIn" state={{ from: location }} replace />
    );
}


export default RequireAuth;