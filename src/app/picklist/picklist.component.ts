import { Component, Input, OnInit } from '@angular/core';
import { DialogRef } from '@progress/kendo-angular-dialog';
import { DialogContentBase } from '@progress/kendo-angular-dialog';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

interface xProduct {
  ProductID: number;
  ProductName: string;
  UnitPrice: number;
}

@Component({
  selector: 'app-picklist',
  templateUrl: './picklist.component.html',
  styleUrls: ['./picklist.component.css']
})
export class PicklistComponent extends DialogContentBase implements OnInit {
  public selectedValue;
  @Input() public pickListData: any[] = [];

    get values(): string[] {
        // Return your list of values here
        return ['Value 1', 'Value 2', 'Value 3'];
      }

      onListBoxSelectionChange(event: any) {
        console.log(event);
        this.selectedValue = this.values[event.index]; // Assuming single selection, adjust as needed
        console.log(this.selectedValue);
        this.dialog.close({ text: 'Submit', selected: this.selectedValue});
      }
  
  constructor(public dialog: DialogRef) {
    super(dialog);
}

public ngOnInit(): void {

 this.columns = Object.keys(this.pickListData[0]).map(key => ({
    field: key,
    title: key
  }));

  this.gridData = {
    data: this.pickListData.slice(this.skip, this.skip + this.pageSize),
    total: this.pickListData.length
  };


  this.total = this.pickListData.length;



  

}

  public onCancelAction(): void {
      this.dialog.close({ text: 'Cancel' });
  }

  public onConfirmAction(): void {
      this.dialog.close({ text: 'Submit', themeColor: 'primary'});
  }


  public gridData: GridDataResult = { data: [], total: 0 };
  public pageSize = 5;
  public skip = 0;
  public total = 0;
  public columns: { field: string; title: string }[] = [];

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.gridData = {
      data: this.gridData.data.slice(this.skip, this.skip + this.pageSize),
      total: this.gridData.total
    };
  }

  public selectedRow: any | undefined;

  public onRowSelect(selection: any): void {
    this.selectedRow = selection.selectedRows[0].dataItem;
    console.log(this.selectedRow);
    this.dialog.close({ text: 'Submit', selectedRow: this.selectedRow});
  }
}

