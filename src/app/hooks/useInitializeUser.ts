// hooks/useInitializeUser.ts
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const useInitializeUser = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const user = JSON.parse(localStorage.getItem('userData') || '{}');
            dispatch(setUser({
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role,
                accessToken,
            }));
        }
    }, [dispatch]);
};

export default useInitializeUser;
