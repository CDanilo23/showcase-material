import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteModule } from './autocomplete.module';
import { MatAutocompleteModule, MatFormFieldModule, MatSlideToggleModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';


describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteComponent, ],
      imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatSlideToggleModule, FormsModule, MatInputModule, BrowserAnimationsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create autocompleteComponent ', () => {
    expect(component).toBeTruthy();
  });

  xit('should to select Arkansas', () => {
    const ac = fixture.debugElement.queryAll(By.css('mat-autocomplete'));
    // ac[0].triggerEventHandler('onSelectionChange', 'Arkansas');

    console.log(ac);
  });
});
