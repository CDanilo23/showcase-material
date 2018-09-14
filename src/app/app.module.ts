import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Modules
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './app.routes';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
