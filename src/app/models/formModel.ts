
export interface AppFormControl{
    rows: Array<Row>;
    class: string[];
  }
  export interface Row {
    columns: Array<Column>;
    class: string[];
  }
  export interface Column {
    control: Control;
    class: string[];
  }
  export interface Control {
    id: string;
    label: string;
    type: string;
    value: number | string;
    class: string[],
    disabled: boolean;
    controlType: string;
    validators: Validator;
    selected: string;
    options: {key: string, value: string}[];
  }
  
  export interface Validator{
    required: boolean;
    attributes: {};
    pattern?: string;
  }