import { Category } from "../../shared/models/category";

export class Product {
    ProductId: number;
    Name: String;
    Description: String;
    Url: String;
    CategoryIds: number[];
    Categories: Category[];
}