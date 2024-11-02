import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  onToggleSidenav() {
    this.drawer.toggle();
  }

  closeSidenav() {
    this.drawer.close();
  }
}
