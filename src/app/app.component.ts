import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppFormControl, Control } from './models/formModel';
import { DynamicFormService } from './services/dynamic-form/dynamic-form.service';
import { FormGroup } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'global';
  public dataSource: any;
  public controls = new Array<Control>();
  public formControls =  {} as AppFormControl;
  form: FormGroup = new FormGroup({});
  constructor(private dynamicFormService: DynamicFormService){}

  ngOnInit(){
    this.dataSource = [
      { key: '1', value: 'HTML' },
      { key: '2', value: 'CSS (disabled)' },
      { key: '3', value: 'JAVASCRIPT' }
    ];
    this.formControls = {
      class:[],
      rows: [
        {
          class:['row-container'],
          columns: [
            {
              class:[''],
              control: {
                id: 'firstName',
                label: 'First Name',
                class: [],
                type: 'text',
                controlType:'textbox',
                disabled: false,
                value:'',
                validators:{required: true, attributes:{}, pattern:'alphanumeric'},
                options: [],
                selected:'',
              }
            },
            {
              class:[''],
              control: {
                id: 'lastName',
                label: 'Last Name',
                class: [],
                type: 'text',
                controlType:'textbox',
                disabled: false,
                value:'',
                validators:{required: true, attributes:{}, pattern:'alphanumeric'},
                options: [],
                selected:'',
              }
            },
            {
              class:[],
              control: {
                id: 'technology',
                label: 'Technology',
                class: [],
                type: '',
                controlType:'dropdown',
                disabled: false,
                value:'',
                validators:{required: true, attributes:{}},
                options: this.dataSource,
                selected:'3',
              }
            }
          ],
        },
        {
          class:['column-container'],
          columns: [
            {
              class:[''],
              control: {
                id: 'numbers',
                label: 'Numbers',
                class: [],
                type: 'text',
                controlType:'textbox',
                disabled: false,
                value:'',
                validators:{required: true, attributes:{}, pattern:'numbers'},
                options: [],
                selected:'',
              }
            },
            {
              class:[''],
              control: {
                id: 'decimal',
                label: 'Decimal',
                class: [],
                type: 'text',
                controlType:'textbox',
                disabled: false,
                value:'',
                validators:{required: true, attributes:{}, pattern:'decimal'},
                options: [],
                selected:'',
              }
            },
            {
              class:[],
              control: {
                id: 'technology1',
                label: 'Technology',
                class: [],
                type: '',
                controlType:'dropdown',
                disabled: false,
                value:'',
                validators:{required: false, attributes:{}},
                options: this.dataSource,
                selected:'3',
              }
            },
            {
              class:[],
              control: {
                id: 'date',
                label: 'Choose a Date',
                class: [],
                type: '',
                controlType:'datepicker',
                disabled: false,
                value:'',
                validators:{required: true, attributes:{}},
                options: [],
                selected:'',
              }
            },
            {
              class:[],
              control: {
                id: 'checkbox',
                label: 'Check me!',
                class: [],
                type: '',
                controlType:'checkbox',
                disabled: false,
                value:'',
                validators:{required: false, attributes:{}},
                options: [],
                selected:'',
              }
            }
          ],
        }
      ],
    };
    this.form = this.dynamicFormService.dynamicFormGroup(this.formControls);
  }
}
