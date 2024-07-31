import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info.component';
import {
  DialogService,
  DialogRef,
  DialogCloseResult,
} from '@progress/kendo-angular-dialog';
import { SVGIcon, formElementIcon } from '@progress/kendo-svg-icons';
import { PicklistComponent } from './picklist/picklist.component';
import { FormGroup, FormControl } from '@angular/forms';
import { DialogInputComponent } from './dialog-input/dialog-input.component';

@Component({
  selector: 'my-app',
  template: `
        <div class="example-wrapper">
            <button kendoButton themeColor="primary" (click)="openDialog()">
                User form
            </button>

            <button kendoButton themeColor="primary" (click)="openPickList()">
            PickList
        </button>
        </div>
        <kendo-textbox [(ngModel)]="selectedValue"></kendo-textbox>
        <div kendoDialogContainer></div>
    `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroup: FormGroup;

  constructor(private dialogService: DialogService) {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(''),
    });
  }

  openDialog(): void {
    const inputs = [
      { label: 'Name', controlName: 'name', type: 'text' },
      { label: 'Age', controlName: 'age', type: 'number' },
    ];

    const dialogRef: DialogRef = this.dialogService.open({
      title: 'Example Dialog',
      content: DialogInputComponent,
      actions: [{ text: 'OK1', primary: true }, { text: 'Cancel' }], // content: { formGroup: this.formGroup, inputs }
    });

    const dialogInstance = dialogRef.content.instance as DialogInputComponent;
    dialogInstance.data = { formGroup: this.formGroup, inputs };

    // Subscribe to the formSubmit event from the dialog component
    dialogInstance.formSubmit.subscribe((formValues) => {
      console.log('Form values from dialog:', formValues);
      // You can handle the form values here as needed
    });

    dialogRef.result.subscribe((result) => {
      if (result instanceof DialogCloseResult) {
        console.log('Dialog was closed without any action.');
      } else if (result) {
        dialogInstance.submit(); // Trigger the submit method to emit the formSubmit event
      } else {
        console.log('Dialog was canceled.');
      }
    });
  }

  public formElementIcon: SVGIcon = formElementIcon;
  public selectedValue;

  public openDialogForm(): void {
    const dialogRef = this.dialogService.open({
      content: UserInfoComponent,
      // actions: [{ text: 'OK', primary: true }, { text: 'Cancel' }]
    });

    const userInfo = dialogRef.content.instance as UserInfoComponent;
    userInfo.name = 'Admin';
    userInfo.age = 42;

    /*
        dialogRef.result.subscribe((r: {[key:string]: string}) => {
            console.log(r);
            if (r.text === 'Yes') {
                console.log(`Form: ${JSON.stringify(userInfo.formGroup.value)}`);
            }
        });
*/
    dialogRef.result.subscribe((r) => {
      console.log(`dialogResult:`, r);
      //if (r.text === 'Yes') {
      //   console.log(`Form: ${JSON.stringify(userInfo.formGroup.value)}`);
    });
  }

  public openPickList(): void {
    const dialogRef = this.dialogService.open({
      content: PicklistComponent,
      width: 450,
      height: 300,
      minWidth: 300,
      cssClass: 'custom-css-class',

      // actions: [{ text: 'OK', primary: true }, { text: 'Cancel' }]
    });

    const plist = dialogRef.content.instance as PicklistComponent;

    const pdata1: any = [
      { ProductID: 1, ProductName: 'Product A', UnitPrice: 10 },
      { ProductID: 2, ProductName: 'Product 2', UnitPrice: 20 },
      { ProductID: 3, ProductName: 'Product 3', UnitPrice: 30 },
    ];

    let pdataStr2: string =
      '[ { "CATEGORY_NAME":"Standard", "CATEGORY_DESC":"Standard category for generic items"}, {  "CATEGORY_NAME":"Summary", "CATEGORY_DESC":"Category to use for summary items." } ]';

    const pdataStr = `
    [
      {
        "CATEGORY_NAME":"Standard",
        "CATEGORY_DESC":"Standard category for generic items"
      },
      {
        "CATEGORY_NAME":"Summary",
        "CATEGORY_DESC":"Category to use for summary items."
      }
    ]
`;

    let pdata2 = JSON.parse(pdataStr);

    let pdata = [
      {
        DBROWID: '310647258',
        CATEGORY_NAME: 'Aggregate Functions',
        CATEGORY_DESC: 'SQL Aggregate Functions',
      },
      {
        DBROWID: '310647104',
        CATEGORY_NAME: 'Array Functions',
        CATEGORY_DESC: 'SQL Array Functions',
      },
      {
        DBROWID: '1221253799',
        CATEGORY_NAME: 'Backup',
        CATEGORY_DESC: 'Category to use for backup items.',
      },
      {
        DBROWID: '4609955',
        CATEGORY_NAME: 'Character Functions',
        CATEGORY_DESC: 'SQL Character Functions',
      },
      {
        DBROWID: '310647942',
        CATEGORY_NAME: 'Collection Functions',
        CATEGORY_DESC: 'SQL Collection Functions',
      },
      {
        DBROWID: '310648241',
        CATEGORY_NAME: 'Conditional Functions',
        CATEGORY_DESC: 'SQL Conditional Functions',
      },
      {
        DBROWID: '510426811',
        CATEGORY_NAME: 'Content Release Extraction',
        CATEGORY_DESC: 'Flex Ops used to extract data for Content Releases.',
      },
      {
        DBROWID: '494241885',
        CATEGORY_NAME: 'Content Release Selection',
        CATEGORY_DESC: 'Flex Ops used to select data for Content Releases.',
      },
      {
        DBROWID: '740746139',
        CATEGORY_NAME: 'Conversion Functions',
        CATEGORY_DESC: 'SQL Conversion Functions',
      },
      {
        DBROWID: '330486217',
        CATEGORY_NAME: 'Data Map',
        CATEGORY_DESC:
          'The Processs Of Mapping Data From A Source Model To A Target Model.',
      },
      {
        DBROWID: '1987068523',
        CATEGORY_NAME: 'Data Mover',
        CATEGORY_DESC: 'Data Mover',
      },
      {
        DBROWID: '310646857',
        CATEGORY_NAME: 'Date Functions',
        CATEGORY_DESC: 'SQL Date Functions',
      },
      {
        DBROWID: '1221254348',
        CATEGORY_NAME: 'External Extract',
        CATEGORY_DESC: 'Category to use for external extract items.',
      },
      {
        DBROWID: '310645970',
        CATEGORY_NAME: 'Formatting Functions',
        CATEGORY_DESC: 'SQL Formatting Functions',
      },
      {
        DBROWID: '310646195',
        CATEGORY_NAME: 'Geometric Functions',
        CATEGORY_DESC: 'SQL Geometric Functions',
      },
      {
        DBROWID: '1744823587',
        CATEGORY_NAME: 'Hidden',
        CATEGORY_DESC: 'Category to use for hidden items.',
      },
      {
        DBROWID: '1221253929',
        CATEGORY_NAME: 'Input',
        CATEGORY_DESC: 'Category to use for input items.',
      },
      {
        DBROWID: '310648100',
        CATEGORY_NAME: 'Miscellaneous Functions',
        CATEGORY_DESC: 'SQL Miscellaneous Functions',
      },
      {
        DBROWID: '310647592',
        CATEGORY_NAME: 'Network Address Functions',
        CATEGORY_DESC: 'SQL Network Address Functions',
      },
      {
        DBROWID: '310646409',
        CATEGORY_NAME: 'Numeric Functions',
        CATEGORY_DESC: 'SQL Numeric Functions',
      },
      {
        DBROWID: '1221254038',
        CATEGORY_NAME: 'Output',
        CATEGORY_DESC: 'Category to use for output items.',
      },
      {
        DBROWID: '1399641634',
        CATEGORY_NAME: 'Process Management',
        CATEGORY_DESC: 'Process Management for Command Center',
      },
      {
        DBROWID: '1614755002',
        CATEGORY_NAME: 'Purge',
        CATEGORY_DESC: 'Purge',
      },
      {
        DBROWID: '2133673689',
        CATEGORY_NAME: 'Queries - Match',
        CATEGORY_DESC: 'The category for Match queries.',
      },
      {
        DBROWID: '1279209220',
        CATEGORY_NAME: 'Queries - NSM',
        CATEGORY_DESC: 'The category for NSM queries.',
      },
      {
        DBROWID: '462102875',
        CATEGORY_NAME: 'Sample',
        CATEGORY_DESC: 'Sample',
      },
      {
        DBROWID: '310647693',
        CATEGORY_NAME: 'Sequence Functions',
        CATEGORY_DESC: 'SQL Sequence Functions',
      },
      {
        DBROWID: '1',
        CATEGORY_NAME: 'Standard',
        CATEGORY_DESC: 'Standard category for generic items',
      },
      {
        DBROWID: '1221254156',
        CATEGORY_NAME: 'Summary',
        CATEGORY_DESC: 'Category to use for summary items.',
      },
      {
        DBROWID: '2052777965',
        CATEGORY_NAME: 'SysMonCheck',
        CATEGORY_DESC: 'SysMon Check',
      },
      {
        DBROWID: '1399641810',
        CATEGORY_NAME: 'System',
        CATEGORY_DESC: 'System for Command Center',
      },
      {
        DBROWID: '1405767793',
        CATEGORY_NAME: 'Tools',
        CATEGORY_DESC: 'Standard category for tools',
      },
      {
        DBROWID: '1975804305',
        CATEGORY_NAME: 'Unify',
        CATEGORY_DESC:
          'The Processs Of Unifying Data From A Native Source Model To The Unified Source Model',
      },
      {
        DBROWID: '1812027736',
        CATEGORY_NAME: 'User Defined Functions',
        CATEGORY_DESC: 'SQL User Defined Functions',
      },
      {
        DBROWID: '310646652',
        CATEGORY_NAME: 'Window Functions',
        CATEGORY_DESC: 'SQL Window Functions',
      },
      {
        DBROWID: '10628113',
        CATEGORY_NAME: 'Wizards',
        CATEGORY_DESC: 'Standard category for wizards.',
      },
      {
        DBROWID: '748480977',
        CATEGORY_NAME: 'XML Functions',
        CATEGORY_DESC: 'SQL XML Functions',
      },
    ];

    // This is passing the data into the picklist..

    dialogRef.content.instance.pickListData = pdata;

    dialogRef.result.subscribe((r) => {
      console.log(r);
      //if (r.text === 'Yes') {
      //   console.log(`Form: ${JSON.stringify(userInfo.formGroup.value)}`);
    });
  }
}
