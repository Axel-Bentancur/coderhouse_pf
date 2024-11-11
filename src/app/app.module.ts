import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RootReducer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StudentEffects } from './features/dashboard/students-table/store/student.effects';
import { CourseEffects } from './features/dashboard/courses-table/store/course.effects';
import { ClassEffects } from './features/dashboard/class-assignment/store/class.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(RootReducer, {}),
    EffectsModule.forRoot([StudentEffects, CourseEffects, ClassEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(withFetch() )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
