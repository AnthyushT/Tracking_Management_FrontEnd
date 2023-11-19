import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryDisplayComponent } from './inventory-display/inventory-display.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CreateInventoryComponent } from './create-inventory/create-inventory.component';
import { BuyWarehouseComponent } from './buy-warehouse/buy-warehouse.component';
import { ListWarehousesComponent } from './list-warehouses/list-warehouses.component';
import { TransferInventoryComponent } from './transfer-inventory/transfer-inventory.component';


@NgModule({
  declarations: [
    InventoryDisplayComponent,
    CreateInventoryComponent,
    BuyWarehouseComponent,
    ListWarehousesComponent,
    TransferInventoryComponent
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
    MatButtonModule,
    FormsModule
  ]
})
export class WarehouseManagementModule { }
