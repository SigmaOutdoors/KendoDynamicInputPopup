import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DialogService, DialogRef } from '@progress/kendo-angular-dialog';


@Component({
  selector: 'app-dialog-input',
  templateUrl: './dialog-input.component.html',
  styleUrls: ['./dialog-input.component.scss']
})
export class DialogInputComponent implements OnInit {
  @Input() data: any;
  @Output() formSubmit = new EventEmitter<any>();

  ngOnInit() {
  }


  @Input() formGroup: FormGroup;
  @Input() inputs: { label: string, controlName: string, type: string }[];

  constructor(private dialogRef: DialogRef) { }

  onClose(): void {
    debugger;
    this.dialogRef.close(this.formGroup.value);
  }


  submit() {
    if (this.data && this.data.formGroup) {
      this.formSubmit.emit(this.data.formGroup.value);
    }
  }

}