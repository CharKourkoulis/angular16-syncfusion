import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { generateRandomProduct } from '../helpers/generateData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  getRandomProducts(productsNumber: number):Observable<Product[]> {
    const products: Product[] = [];
    for (let i = 1; i <= productsNumber; i++) {
      products.push(generateRandomProduct(i));
    }
    return of(products);
  }

}
