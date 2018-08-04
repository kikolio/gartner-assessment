import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category";
import { BaseService } from "./base.service";

@Injectable()
export class CategoryService extends BaseService {
    constructor(private http: HttpClient) {
        super();
     }

    public getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.api_url}/Categories`);
    }
}