import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-price-chart',
  standalone: true,
  imports: [CommonModule, ChartModule],
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceChartComponent implements OnInit {
  public primaryYAxis?: Object;
  public primaryXAxis?: Object;
  public title?: string;

  chartData$: Observable<{ x: Date; y: number }[]> = this.productsService
    .getRandomProducts(20)
    .pipe(
      map((products) => {
        const result = products.map((product) => ({
          x: product.created,
          y: product.price,
        }));
        return result;
      })
    );

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
   this.initializeChartValues();
  }

  initializeChartValues(){
    this.primaryXAxis = {
      valueType: 'DateTime',
      title: 'Prices Across Months',
      labelFormat: 'yMMM',
    };
    this.primaryYAxis = {
      title: 'Prices in (USD)',
    };
    this.title = 'Average Sales Comparison';
  }

}
