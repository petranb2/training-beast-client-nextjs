import { HttpResponse } from "./HttpResponseInterface";

export interface HttpClientInterface {
    get(url: string, config: { params: {}, headers?: {} }): Promise<HttpResponse>
    post(url: string, config: { data: {}, headers?: {} }): Promise<HttpResponse>
    put(url: string, config: { data: {}, headers?: {} }): Promise<HttpResponse>
    delete(url: string, config: { data: {}, headers?: {} }): Promise<HttpResponse>
}
