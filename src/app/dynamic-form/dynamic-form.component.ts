import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppFormControl, Validator } from '../models/formModel';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule,
     MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss'
})
export class DynamicFormComponent {

  @Input() form!: FormGroup;
  @Input() appFormControl!: AppFormControl;

  constructor() { }

  ngOnInit() {
    console.log('hi')
  }

  keyPress(event: any, validator: Validator) {
    if (validator.pattern === 'alphanumeric') {
      var inp = String.fromCharCode(event.keyCode);
      if (/[a-zA-Z0-9]/.test(inp)) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    } else if (validator.pattern === 'numbers') {
      var charCode = (event.which) ? event.which : event.keyCode;
      // Only Numbers 0-9
      if ((charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    } else if (validator.pattern === 'decimal') {
      // Only Numbers with Decimals
      var charCode = (event.which) ? event.which : event.keyCode;
      if (charCode != 46 && charCode > 31
        && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      }
      return true;
    } else if (validator.pattern === 'alphanumericwithcharacters') {
      // Only AlphaNumeric with Some Characters [-_ ]
      var inp = String.fromCharCode(event.keyCode);
      // Allow numbers, alpahbets, space, underscore
      if (/[a-zA-Z0-9-_ ]/.test(inp)) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    }
    return;
  }
}
