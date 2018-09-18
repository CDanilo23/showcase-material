import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteModule } from './showcase/autocomplete/autocomplete.module';
import { SidenavModule } from './showcase/sidenav/sidenav.module';
import { APP_ROUTES } from '../app.routes';
import { InputModule } from './showcase/input/input.module';
import { CheckboxModule } from './showcase/checkbox/checkbox.module';
import { RadioModule } from './showcase/radio/radio.module';
import { SelectModule } from './showcase/select/select.module';
import { DatepickerModule } from './showcase/datepicker/datepicker.module';


@NgModule({
    imports: [
      CommonModule,
      SidenavModule,
      AutocompleteModule,
      CheckboxModule,
      APP_ROUTES,
      RadioModule,
      SelectModule,
      DatepickerModule
    ],
    exports: [
      SidenavModule,
      AutocompleteModule,
      InputModule,
      CheckboxModule,
      RadioModule,
      SelectModule,
      DatepickerModule
    ],
    declarations: [],
})
export class PagesModule { }
