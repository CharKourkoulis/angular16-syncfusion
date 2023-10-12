import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { EditSettingsModel, FilterSettingsModel, GridModule, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { Product } from 'src/app/interfaces/product';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule, MultiSelectModule, AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'datagrid-component',
  imports: [CommonModule, GridModule, DatePickerAllModule, TimePickerModule, DropDownListModule, TextBoxModule, MultiSelectModule, AutoCompleteModule, FormsModule],
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent {
  //syncfusion data grid related properties
  public pageSettings?: PageSettingsModel = { pageSize: 12, pageSizes: [10, 12, 20, 50] };
  public editSettings?: EditSettingsModel  = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  public toolbar?: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  public sortOptions?: object = { columns: [{ field: 'id', direction: 'Ascending' }] };
  public filterOption?: FilterSettingsModel = { type: 'Excel' };
  public height = '220px';
  public fields?: object = { text: 'id', value: 'id' };

  products$: Observable<Product[]> = this.productsService.getRandomProducts(10000);

  constructor(private productsService: ProductsService){

  }

}
