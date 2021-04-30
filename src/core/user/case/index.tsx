import SignInCase from "./signIn.case";
import SignUpCase from "./signUp.case";
import CheckUserCase from "./checkUser.case";
import ConfirmSignUpCase from "./confirmSignUpToken.case";
import GetUserProfileWithCookieCase from "./getUserProfile.case";
import UploadProfileImageCase from "./uploadProfileImageCase";
import UpdateUsernameCase from "./updateUsernameCase";
import UpdateDisplayNameCase from "./updateDisplayNameCase";
import UpdateShortBioCase from "./updateShortBioCase";
import UpdateSportsCase from "./updateSportsCase";
import { userRepo, profileRepo } from "../repo";

const signInCase = new SignInCase(userRepo);
const signUpCase = new SignUpCase(userRepo);
const checkUserCase = new CheckUserCase(userRepo);
const confirmSignUpCase = new ConfirmSignUpCase(userRepo);
const getUserProfileWithCookieCase = new GetUserProfileWithCookieCase(profileRepo);
const uploadProfileImageCase = new UploadProfileImageCase(profileRepo);
const updateUsernameCase = new UpdateUsernameCase(profileRepo);
const updateDisplayNameCase = new UpdateDisplayNameCase(profileRepo);
const updateShortBioCase = new UpdateShortBioCase(profileRepo);
const updateSportsCase = new UpdateSportsCase(profileRepo);
export {
    signInCase, 
    checkUserCase, 
    signUpCase, 
    confirmSignUpCase, 
    getUserProfileWithCookieCase, 
    uploadProfileImageCase, 
    updateUsernameCase,
    updateDisplayNameCase,
    updateShortBioCase,
    updateSportsCase
};