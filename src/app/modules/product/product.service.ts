import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../../shared/services/base.service";
import { Observable } from "rxjs";
import { Product } from "./product";

@Injectable()
export class ProductService extends BaseService {
    constructor(private http: HttpClient) {
        super();
    }

    public getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.api_url}/Products`);
    }

    public getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.api_url}/Products/${id}`);
    }

    public addNewProduct(product: Product) : Observable<Product> {
       return this.http.post<Product>(`${this.api_url}/Products`, this.stringify(product), this.httpOptions)
    }

    public updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.api_url}/Products/${product.ProductId}`, this.stringify(product), this.httpOptions)
    }

}