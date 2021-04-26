import { HttpClientInterface } from "../../../infra/http/HttpClientInterface";
import UserCredentials from "../model/view/userCredentials.model";
import ROUTES from "../util/routes";
import UserProfile from "../model/view/userProfile.model";

interface UserRepoInterface {
    signIn(userCredentials: UserCredentials): Promise<UserProfile>
    checkUser(): Promise<UserProfile>
    signOut(): void
    signUp(): void
}

class UserRepo implements UserRepoInterface {
    httpClient: HttpClientInterface;

    constructor(httpClient: HttpClientInterface) {
        this.httpClient = httpClient;
    }
    /**
     * Check if the user is authorized via the cookie
     * @returns userProfile UserProfile
     */
    async checkUser(): Promise<UserProfile> {
        let userProfile;
        try {

            let httpResponse = await this.httpClient.get(ROUTES.CHECK_AUTH, { params: {} });
            userProfile = httpResponse.data as UserProfile;

        } catch (error) {
            throw error;
        }
        return userProfile;
    }

    async signIn(userCredentials: UserCredentials): Promise<UserProfile> {
        let userProfile;
        try {

            let httpResponse = await this.httpClient.post(ROUTES.SIGNIN, { data: userCredentials });
            userProfile = httpResponse.data as UserProfile;

        } catch (error) {
            throw error;
        }
        return userProfile;
    }

    signOut(): void {
        throw new Error("Method not implemented.");
    }
    signUp(): void {
        throw new Error("Method not implemented.");
    }

}

export { UserRepo };
export type { UserRepoInterface };
