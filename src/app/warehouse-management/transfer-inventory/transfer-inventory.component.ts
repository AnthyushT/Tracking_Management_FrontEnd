import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-transfer-inventory',
  templateUrl: './transfer-inventory.component.html',
  styleUrls: ['./transfer-inventory.component.css']
})
export class TransferInventoryComponent implements OnInit {
  displayedColumns: string[] = ['itemCategory', 'stockLevel', 'warehouseName', 'actions'];
  inventory = new MatTableDataSource<any>([]);
  warehouses: any[] = [];
  errorMessage: String = "";
  transferRow: any = null;
  sourceWarehouseName: string = '';
  destinationWarehouseName: string = '';
  stockLevel: number = 0;
  itemCategory: string = '';

  constructor(private inventoryService: WarehouseService) { }

  ngOnInit(): void {
    this.getInventory();
    this.getWarehouses();
  }

  getInventory(): void {
    this.inventoryService.getInventoryByEmail().subscribe(
      response => this.inventory.data = response,
      err => {
        console.log('Error getting inventory', err)
      }
    );
  }

  getWarehouses(): void {
    this.inventoryService.getWarehouseByEmail().subscribe(
      response => this.warehouses = response,
      err => {
        console.log('Error getting warehouses', err)
      }
    );
  }

  startTransfer(row: any): void {
    this.transferRow = row;
    this.sourceWarehouseName = row.warehouseName;  // Set the source warehouse name
    this.itemCategory = row.itemCategory;  // Set the item category
  }

  transferInventory(): void {
    if (this.sourceWarehouseName === this.destinationWarehouseName) {
      this.errorMessage = "Source and destination warehouses cannot be the same";
      return;
    }
    this.inventoryService.transferInventory(this.itemCategory, 
      this.sourceWarehouseName, 
      this.destinationWarehouseName, 
      this.stockLevel).subscribe(
      response => {
        console.log('Inventory transferred successfully!', response);
        this.errorMessage = "";
        this.transferRow = null;
        this.getInventory();  // Refresh the inventory
        window.alert('Inventory transferred successfully!'); 
      },
      err => {
        this.errorMessage = "Error transferring inventory";
        console.log('Error transferring inventory', err)
      }
    );
  }
  
}


