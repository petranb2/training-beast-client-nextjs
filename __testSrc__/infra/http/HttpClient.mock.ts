import { HttpClientInterface } from "@infra/http/HttpClientInterface";
import { HttpResponse } from "@infra/http/HttpResponseInterface";
import { Method } from "@infra/http/HttpMethods";
import axios, { AxiosInstance, AxiosStatic } from "axios";

/**
 * this is a class with mocked axios to fake the responses
 */
class HttpClientMock implements HttpClientInterface {
    readonly TBCaxios: AxiosInstance;

    public constructor(axios: jest.Mocked<AxiosStatic>) {
        this.TBCaxios = axios;
    }
    get(url: string, config: { params: {}, headers?: {} }): Promise<HttpResponse> {
        let requestConfig = {
            url: url,
            method: Method.GET,
            params: config.params,
            headers: config.headers
        };
        return this.TBCaxios.get('', requestConfig);
    }

    post(url: string, config: { data: {}, headers?: {} }): Promise<HttpResponse> {
        let requestConfig = {
            url: url,
            method: Method.POST,
            data: config.data,
            headers: {}
        };
        return this.TBCaxios.post('', requestConfig);
    }

    put(url: string, config: { data: {}; }): Promise<HttpResponse> {
        let requestConfig = {
            url: url,
            method: Method.PUT,
            data: config.data
        };
        return this.TBCaxios.put('', requestConfig);
    }

    delete(url: string, config: { data: {}; }): Promise<HttpResponse> {
        let requestConfig = {
            url: url,
            method: Method.DELTE,
            data: config.data
        };
        return this.TBCaxios.delete('', requestConfig);
    }
}
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedHttpClient = new HttpClientMock(mockedAxios);
export { mockedHttpClient, mockedAxios };