import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() closeDrawer!: () => void;

  constructor(private router: Router) {}

  navigation(route: string) {
    if (this.closeDrawer) {
      this.closeDrawer();
    }
    this.router.navigate([route]);
  }
}

