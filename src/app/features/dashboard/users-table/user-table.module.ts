import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { UserTableComponent } from './user-table.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../modal/modal.module';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { StoreModule } from '@ngrx/store';
import { userFeature } from './store/user.reducer';



@NgModule({
  declarations: [
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

    ModalModule,

    StoreModule.forFeature(userFeature),
    EffectsModule.forFeature([UserEffects]),
  ],
  exports: [ UserTableComponent ]
})
export class UserTableModule { }
