
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';

// ShowCase Modules
import { InputModule } from '../input/input.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { CoreModule } from '../../core.module';
import { RadioModule } from '../radio/radio.module';
import { SelectModule } from '../select/select.module';
import { DatepickerModule } from '../datepicker/datepicker.module';

// Components
import { SidenavComponent } from './sidenav.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AutocompleteModule,
    InputModule,
    CheckboxModule,
    RadioModule,
    SelectModule,
    DatepickerModule
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent],
})
export class SidenavModule { }
