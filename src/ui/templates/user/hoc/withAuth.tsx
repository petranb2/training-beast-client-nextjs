import { useContext, useEffect } from 'react';
import { AuthContext } from "../context/authContext";
import { checkUserCase } from "../../../../core/user/case";
// Client Side Auth
export const withAuth = (Component: any) => {
    const Wrapper = (props: any) => {
        const authContext = useContext(AuthContext);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    let userProfile = await checkUserCase.execute();
                    authContext.updateState({ ...userProfile, isAuthChecked: true });
                } catch (error: any) {
                    authContext.updateState({ isAuthChecked: true });
                    // window.location.replace("/");
                }
            };
            if (!authContext.isAuthChecked) {
                fetchData();
            }

        }, [])
        if (!authContext.isAuthChecked) {
            return <p>Checking the auth</p>
        }
        return <Component {...props} />
    }

    return Wrapper
}