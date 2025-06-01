import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss'
})
export class HeaderHomeComponent {
  constructor(private routes: Router) { }

  onClick(): void {
    this.routes.navigate(['/dashboard']);
  }
}
