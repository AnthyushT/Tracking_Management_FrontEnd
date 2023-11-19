import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-inventory-display',
  templateUrl: './inventory-display.component.html',
  styleUrls: ['./inventory-display.component.css']
})
export class InventoryDisplayComponent implements OnInit {
  displayedColumns: string[] = ['itemCategory', 'stockLevel', 'warehouseName','actions'];
  inventory = new MatTableDataSource<any>([]);
  warehouses: any[] = [];
  errorMessage: String = "";

  constructor(private inventoryService: WarehouseService) { }

  ngOnInit(): void {
    this.getWarehouses(); 
  }

  getWarehouses(): void {
    const email = sessionStorage.getItem('userEmail'); 
    this.inventoryService.getWarehouseByEmail().subscribe(
      response => {
        this.warehouses = response;
        this.getInventory();
      },
      err => {
        console.log('Error getting warehouses', err);
      }
    );
  }

  getInventory(): void {
    const email = sessionStorage.getItem('userEmail');
    this.inventoryService.getInventoryByEmail().subscribe(
      response => this.inventory.data = response,
      err => {
        console.log('Error getting inventory', err)
      }
    );
  }

  increaseStockLevel(inventory: any): void {
    const maxStockLevel = this.warehouses.reduce((sum, warehouse) => sum + warehouse.warehouseCapacity, 0);
    if (inventory.stockLevel >= maxStockLevel) {
      this.errorMessage = 'Warehouse is full';
    } else {
      this.inventoryService.increaseStockLevel(inventory.inventoryId).subscribe(
        response => {
          console.log('Stock level increased successfully', response);
          this.getInventory(); // re-render
          this.errorMessage = '';
        },
        err => {
          console.log('Error increasing stock level', err);
          this.errorMessage = 'Warehouse is full';
        }
      );
    }
  }

  decreaseStockLevel(inventory: any): void {
    if (inventory.stockLevel <= 0) {
      this.errorMessage = 'No stock left to decrease';
    } else {
      this.inventoryService.decreaseStockLevel(inventory.inventoryId).subscribe(
        response => {
          console.log('Stock level decreased successfully', response);
          this.getInventory(); // re-render
          this.errorMessage = '';
        },
        err => {
          console.log('Error decreasing stock level', err);
          this.errorMessage = 'No stock left to decrease';
        }
      );
    }
  }
}

