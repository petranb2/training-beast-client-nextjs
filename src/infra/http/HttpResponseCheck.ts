import { HttpStatusCode } from "./HttpStatusCodes"

class HttpResponseCheck {

    isValidResponse(response: any): boolean {
        if (response) {
            return true
        }
        return false;
    }

    isUnauthorized(response: any): boolean {
        if (!this.isValidResponse(response)) {
            return false;
        }
        if (response.status === HttpStatusCode.UNAUTHORIZED) {
            return true
        }
        return false;
    }
}

export default new HttpResponseCheck();