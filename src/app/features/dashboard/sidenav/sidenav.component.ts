import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  role$: Observable<boolean>;
  @Input() closeDrawer!: () => void;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.role$ = authService.getUserRole()
  }

  navigation(route: string) {
    if (this.closeDrawer) {
      this.closeDrawer();
    }
    this.router.navigate([route]);
  }
}

