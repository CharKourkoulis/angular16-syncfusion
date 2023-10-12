import { Routes } from '@angular/router';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import {
  PageService,
  SortService,
  FilterService,
  GroupService,
  VirtualScrollService
} from '@syncfusion/ej2-angular-grids';
import {
  DateTimeService,
  LineSeriesService,
  DateTimeCategoryService,
  StripLineService,
} from '@syncfusion/ej2-angular-charts';

export const routes: Routes = [
  { path: '', component: DatagridComponent },
  {
    path: 'datagrid',
    providers: [PageService, SortService, FilterService, GroupService, VirtualScrollService ],
    component: DatagridComponent,
    pathMatch: 'full',
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./components/form/form.component').then(
        (mod) => mod.FormComponent
      ),
  },
  {
    path: 'chart',
    providers: [
      DateTimeService,
      LineSeriesService,
      DateTimeCategoryService,
      StripLineService,
    ],
    loadComponent: () =>
      import('./components/price-chart/price-chart.component').then(
        (mod) => mod.PriceChartComponent
      ),
  },
  { path: '**', component: DatagridComponent },
];
