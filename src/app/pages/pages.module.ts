import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteModule } from './showcase/autocomplete/autocomplete.module';
import { SidenavModule } from './showcase/sidenav/sidenav.module';
import { APP_ROUTES } from '../app.routes';


@NgModule({
  declarations: [
  ],
    imports: [
      CommonModule,
      AutocompleteModule,
      SidenavModule,
      APP_ROUTES
    ],
    exports: [
      AutocompleteModule,
      SidenavModule
    ]
})
export class PagesModule { }
