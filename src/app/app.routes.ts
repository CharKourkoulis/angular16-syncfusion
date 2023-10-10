import { Routes } from '@angular/router';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  {path : '', component : DatagridComponent},
  {path : 'datagrid', component : DatagridComponent, pathMatch: 'full'},
  {path: 'form', loadComponent: () => import('./components/form/form.component').then(mod => mod.FormComponent)},
  {path : '**', component : DatagridComponent}
];
