import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCreationComponent } from './order-creation/order-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { EditOrderDialogComponent } from './edit-order-dialog/edit-order-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DialogRef } from '@angular/cdk/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    OrderCreationComponent,
    DisplayComponent,
    EditOrderDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule
  ]
})
export class OrderManagementModule { }
