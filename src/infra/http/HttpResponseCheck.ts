import { HttpStatusCode } from "./HttpStatusCodes"
import { HttpResponse } from "./HttpResponseInterface";

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

    hasStatusCode(response: HttpResponse, httpStatusCode: number): boolean {
        if (!this.isValidResponse(response)) {
            return false;
        }
        if (response.status === httpStatusCode) {
            return true
        }
        return false;
    }
}

export default new HttpResponseCheck();