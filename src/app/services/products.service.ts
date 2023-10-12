import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { generateRandomProduct } from '../helpers/generateData';
import { Observable, of, repeat, switchMap, tap, timer } from 'rxjs';
import { getRandomDelay } from '../helpers/getRandomDelay';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  getRandomProducts(productsNumber: number): Observable<Product[]> {
    const products: Product[] = [];
    for (let i = 1; i <= productsNumber; i++) {
      products.push(generateRandomProduct(i));
    }
    return of(products);
  }

  randomProductsStream$: Observable<Product[]> = of("")
    .pipe(
      switchMap(() =>
        timer(getRandomDelay())
          .pipe(
            switchMap(() => this.getRandomProducts(100)),
            repeat(),
            tap( result => console.log(result))
          )
      )
    );


}
