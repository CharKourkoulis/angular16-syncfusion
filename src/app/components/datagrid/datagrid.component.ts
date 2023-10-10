import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  standalone: true,
  selector: 'datagrid-component',
  imports: [CommonModule],
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  constructor(private productsService: ProductsService){

  }

  ngOnInit(): void {
    this.productsService.getRandomProducts(100).subscribe(products => {
      console.log(products);
    })
  }

}
