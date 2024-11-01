import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ToolbarComponent } from './toolbar.component';

// MODULES
import { SharedModule } from '../../../shared/shared.module';
import { ToolbarRoutingModule } from './toolbar-routing.module';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToolbarRoutingModule,
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
