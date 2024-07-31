import { Component, Input, OnInit } from '@angular/core';
import { DialogRef, DialogContentBase } from '@progress/kendo-angular-dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'user-info',
    templateUrl: './user-info.component.html',
})
export class UserInfoComponent extends DialogContentBase implements OnInit {

  

    @Input() public set age(value: number) {
        this.formGroup?.controls.age.setValue(value);
        this._age = value;
    }

    public get age(): number {
        return this._age;
    }

    @Input() public set name(value: string) {
        this.formGroup?.controls.name.setValue(value);
        this._name = value;
    }

    public get name(): string {
        return this._name;
    }

    public formGroup;
    private _age: number;
    private _name: string;

    constructor(public dialog: DialogRef) {
        super(dialog);
    }

    public ngOnInit(): void {
        this.formGroup = new FormGroup({
            age: new FormControl(this.age),
            name: new FormControl(this.name)
        });
    }

    public onCancelAction(): void {
        this.dialog.close({ text: 'Cancel' });
    }

    public onConfirmAction(): void {
        this.dialog.close({ text: 'Submit', themeColor: 'primary', fg : this.formGroup.value });
    }
}
