// import {useAuth} from './useAuth';
import {Navigate, useLocation} from 'react-router-dom'


function RequireAuth({ children }) {
    const { authed } = useAuth();
    const location = useLocation();


     if(authed){
        return children

    }
        return <Navigate to="/login" 
        replace
        state={{ path: location.pathname }}
         />;
    // return children
}

export default RequireAuth;