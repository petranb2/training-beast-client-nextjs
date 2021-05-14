import { UserRepo } from "@core/user/repo/user.repo";
import { ProfileRepo } from "@core/user/repo/profile.repo";
import { mockedHttpClient, mockedAxios } from "@tests/infra/http/HttpClient.mock";


const userRepo = new UserRepo(mockedHttpClient);
const profileRepo = new ProfileRepo(mockedHttpClient);

export {
    userRepo,
    profileRepo,
    mockedAxios
}