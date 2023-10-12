import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AppBarModule, RouterModule, RouterOutlet, ButtonModule, ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

}
