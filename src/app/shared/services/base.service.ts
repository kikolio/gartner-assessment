import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

export class BaseService {
    protected httpOptions = {
        headers: new HttpHeaders( { 'Content-Type' : 'application/json'})
    };

    protected api_url = environment.api_url;

    protected stringify(obj:any) {
        return JSON.stringify(obj);
    }
}