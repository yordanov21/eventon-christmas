import { Navigate, useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useContext, useEffect } from 'react';


const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            })
    }, []);

    return null;
    //return <Navigate to="/login" replace={true} />;
};

export default Logout;