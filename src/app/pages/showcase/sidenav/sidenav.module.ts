
// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteModule } from '../autocomplete/autocomplete.module';

// Material Modules

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

// Components
import { SidenavComponent } from './sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    AutocompleteModule
  ],
  exports: [SidenavComponent],
  declarations: [SidenavComponent],
})
export class SidenavModule { }
