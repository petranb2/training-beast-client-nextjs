import SignInCase from "./signIn.case";
import CheckUserCase from "./checkUser.case";
import { userRepo } from "../repo";

const signInCase = new SignInCase(userRepo);
const checkUserCase = new CheckUserCase(userRepo);
export { signInCase, checkUserCase };