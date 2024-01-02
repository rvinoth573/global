import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppFormControl } from '../../models/formModel';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  dynamicFormGroup(appFormControl: AppFormControl): FormGroup{
    let group : any = {};
    appFormControl.rows.forEach(r=>{
      r.columns.forEach(c=>{
        group[c.control.id] = c.control.validators.required ? new FormControl({value: '', disabled: c.control.disabled}, Validators.required) : new FormControl({value: '', disabled: c.control.disabled});
      })
    })
    // controls.forEach(i=>{
    //   group[i.key] = i.required ? new FormControl({value: '', disabled: i.disabled}, Validators.required) : new FormControl({value: '', disabled: i.disabled});
    // });
    return new FormGroup(group);
  }
}
