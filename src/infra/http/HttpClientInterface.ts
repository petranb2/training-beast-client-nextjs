import { HttpResponse } from "./HttpResponseInterface";

export interface HttpClientInterface {
    get(url: string, config: { params: {} }): Promise<HttpResponse>
    post(url: string, config: { data: {} }): Promise<HttpResponse>
    put(url: string, config: { data: {} }): Promise<HttpResponse>
    delete(url: string, config: { data: {} }): Promise<HttpResponse>
}
