import SignInCase from "./signIn.case";
import SignUpCase from "./signUp.case";
import CheckUserCase from "./checkUser.case";
import ConfirmSignUpCase from "./confirmSignUpToken.case";
import { userRepo } from "../repo";

const signInCase = new SignInCase(userRepo);
const signUpCase = new SignUpCase(userRepo);
const checkUserCase = new CheckUserCase(userRepo);
const confirmSignUpCase = new ConfirmSignUpCase(userRepo);
export { signInCase, checkUserCase, signUpCase , confirmSignUpCase};