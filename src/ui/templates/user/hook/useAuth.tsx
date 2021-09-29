import { useContext, useEffect } from 'react';
import { AuthContext } from "../context/authContext";
import { checkUserCase } from "../../../../core/user/case";
// Client Side Auth
export const useAuth = () => {
    const authContext = useContext(AuthContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                let userProfile = await checkUserCase.execute();
                authContext.updateState({ ...userProfile, isAuthChecked: true });
            } catch (error: any) {
                authContext.updateState({ isAuthChecked: true });
            }
        };
        if (!authContext.isAuthChecked) {
            fetchData();
        }

    }, [])
}