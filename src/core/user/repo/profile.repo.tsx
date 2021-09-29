import { HttpClientInterface } from "../../../infra/http/HttpClientInterface";
import ROUTES from "../util/routes";
import UserProfile from "../model/view/userProfile.model";
import ProfileImageUrl from "../model/view/profileImageUrl.model";

interface ProfileRepoInterface {
    fetchProfileWithCookie(username: string, cookie: string): Promise<UserProfile>,
    uploadProfileImage(image: FormData, headers: {}): Promise<ProfileImageUrl>,
    updateUsername(username: string): Promise<void>,
    updateDisplayName(displayName: string): Promise<void>,
    updateShortBio(shortBio: string): Promise<void>,
    updateSports(sports: string[]): Promise<void>,
}

class ProfileRepo implements ProfileRepoInterface {
    private httpClient: HttpClientInterface;

    constructor(httpClient: HttpClientInterface) {
        this.httpClient = httpClient;
    }
    async updateSports(sports: string[]): Promise<void> {
        try {
            await this.httpClient.post(ROUTES.UPDATE_SPORTS, { data: { sports: sports } });
        } catch (error: any) {
            throw error;
        }
    }

    async updateShortBio(shortBio: string): Promise<void> {
        try {
            await this.httpClient.post(ROUTES.UPDATE_SHORTBIO, { data: { shortBio: shortBio } });
        } catch (error: any) {
            throw error;
        }
    }

    async updateDisplayName(displayName: string): Promise<void> {
        try {
            await this.httpClient.post(ROUTES.UPDATE_DISPLAY_NAME, { data: { displayName: displayName } });
        } catch (error: any) {
            throw error;
        }
    }

    async updateUsername(username: string): Promise<void> {
        try {
            await this.httpClient.post(ROUTES.UPDATE_USERNAME, { data: { username: username } });
        } catch (error: any) {
            throw error;
        }
    }

    async uploadProfileImage(image: FormData, headers: {}): Promise<ProfileImageUrl> {
        let profileImageUrl;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.UPLOAD_PROFILE_IMAGE, { data: image, headers: headers });
            profileImageUrl = httpResponse.data as ProfileImageUrl;
        } catch (error: any) {
            throw error;
        }
        return profileImageUrl;
    }

    async fetchProfileWithCookie(username: string, cookie: string): Promise<UserProfile> {
        let userProfile;
        try {
            let httpResponse = await this.httpClient.post(ROUTES.PROFILE_FETCH, { data: { username: username }, headers: { cookie: cookie } });
            userProfile = httpResponse.data as UserProfile;
        } catch (error: any) {
            throw error;
        }
        return userProfile;
    }

}

export { ProfileRepo };
export type { ProfileRepoInterface };
