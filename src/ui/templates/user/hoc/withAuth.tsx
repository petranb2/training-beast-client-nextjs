import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from "../context/authContext";
import { checkUserCase } from "../../../../core/user/case";
// Client Side Auth
export const withAuth = (Component: any) => {
    const Wrapper = (props: any) => {
        const authContext = useContext(AuthContext);
        const router = useRouter();
        useEffect(() => {
            const fetchData = async () => {
                try {
                    let userProfile = await checkUserCase.execute();
                    authContext.updateState({ ...userProfile, isAuthChecked: true });
                } catch (error) {
                    authContext.updateState({ isAuthChecked: true });
                    router.push('/');
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