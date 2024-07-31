import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { UserInfoComponent } from './user-info.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ListBoxModule } from '@progress/kendo-angular-listbox';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { PicklistComponent } from './picklist/picklist.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogInputComponent } from './dialog-input/dialog-input.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [UserInfoComponent, AppComponent, PicklistComponent,DialogInputComponent],
  imports: [
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    ReactiveFormsModule,
    ListBoxModule,
    GridModule,
    FormsModule // needed for ngModule to work
  ],
})
export class AppModule {}
