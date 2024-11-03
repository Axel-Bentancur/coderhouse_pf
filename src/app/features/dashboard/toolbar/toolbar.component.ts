import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../../../core/models';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  authUser$: Observable<IStudent | null>;

  constructor(
    private authService: AuthService,
  ){
    this.authUser$ = this.authService.authUser$;
  }

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  logout(){
    this.authService.logout()
  }
}
