import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { GridModule, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Product } from 'src/app/interfaces/product';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'datagrid-component',
  imports: [CommonModule, GridModule],
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  public pageSettings?: PageSettingsModel;
  products$: Observable<Product[]> = this.productsService.getRandomProducts(300000);

  constructor(private productsService: ProductsService){

  }

  ngOnInit(): void {
    this.pageSettings = { pageSize: 12, pageSizes: [10, 12, 20, 50] };
  }

}
