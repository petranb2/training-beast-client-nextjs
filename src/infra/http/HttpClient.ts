import { HttpClientInterface } from "./HttpClientInterface";
import { HttpResponse } from "./HttpResponseInterface";
import axiosBeast from "./axiosBeast";
import { Method } from "./HttpMethods";

class HttpClient implements HttpClientInterface {

    get(url: string, config: { params: {}, headers?: {} }): Promise<HttpResponse> {
        let requestConfig = {
            url: url,
            method: Method.GET,
            params: config.params,
            headers: config.headers
        };
        return axiosBeast.request(requestConfig);
    }

    post(url: string, config: { data: {}, headers?: {} }): Promise<HttpResponse> {
        let requestConfig = {
            url: url,
            method: Method.POST,
            data: config.data,
            headers: {}
        };
        return axiosBeast.request(requestConfig);
    }

    put(url: string, config: { data: {}; }): Promise<HttpResponse> {
        let requestConfig = {
            url: url,
            method: Method.PUT,
            data: config.data
        };
        return axiosBeast.request(requestConfig);
    }

    delete(url: string, config: { data: {}; }): Promise<HttpResponse> {
        let requestConfig = {
            url: url,
            method: Method.DELTE,
            data: config.data
        };
        return axiosBeast.request(requestConfig);
    }
}

export default new HttpClient;