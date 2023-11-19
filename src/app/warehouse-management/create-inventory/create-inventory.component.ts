import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.css']
})
export class CreateInventoryComponent implements OnInit {
  minStockLevel: number = 0;
  maxStockLevel: number = 0;
  warehouses: any[] = [];
  showEmailInput: boolean = false; // Change this to false
  email: string = '';
  hasWarehouse: boolean = false;
  inventoryForm = new FormGroup({
    itemCategory: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    stockLevel: new FormControl(0, [Validators.required]),
    warehouseName: new FormControl('', Validators.required)
});

  errorMessage: string = '';

  constructor(private inventoryService: WarehouseService, private router: Router) { }

  ngOnInit(): void {
    this.checkWarehouses(); // Call checkWarehouses method when the component is initialized
  }

  checkWarehouses(): void {
    const email = sessionStorage.getItem('userEmail'); // Get the email from session storage
    this.inventoryService.getWarehouseByEmail().subscribe(
      response => {
        if (response && response.length > 0) {
          this.hasWarehouse = true;
          this.warehouses = response;
          // Set the stock level limits
          this.minStockLevel = 1;
          this.maxStockLevel = this.warehouses.reduce((sum, warehouse) => sum + warehouse.warehouseCapacity, 0);
        } else {
          this.errorMessage = 'Please lease a warehouse to keep your inventory. Go to HOME and Click on Lease Warehouse';
        }
      },
      err => {
        console.log('Error checking warehouses', err);
        this.errorMessage = 'An error occurred while checking the warehouses';
      }
    );
  }

  onWarehouseChange(event: Event): void {
    const warehouseName = (event.target as HTMLSelectElement).value;
    const warehouse = this.warehouses.find(w => w.warehouseName === warehouseName);
    if (warehouse) {
      this.minStockLevel = 1;
      this.maxStockLevel = warehouse.warehouseCapacity;
      this.inventoryForm.controls.stockLevel.setValidators([Validators.required, Validators.min(this.minStockLevel), Validators.max(this.maxStockLevel)]);
      this.inventoryForm.controls.stockLevel.updateValueAndValidity();
    }
  }


  onSubmit(): void {
    if (this.inventoryForm.valid) {
      this.inventoryService.addInventory(this.inventoryForm.value).subscribe(
        response => {
          console.log('Inventory added!', response);
          window.alert('Inventory Added Successfully');
          // Update the warehouse capacity
          const warehouse = this.warehouses.find(w => w.warehouseName === this.inventoryForm.value.warehouseName);
          if (warehouse && this.inventoryForm.value.stockLevel) {
            warehouse.warehouseCapacity -= this.inventoryForm.value.stockLevel;
            this.inventoryService.updateWarehouseCapacity(warehouse, warehouse.warehouseId).subscribe(
              response => console.log('Warehouse capacity updated!', response),
              err => console.log('Error updating warehouse capacity', err)
            );
          }
          this.router.navigate(['/common']);
        },
        err => {
          console.log('Error adding inventory', err);
          if (err.error.message === 'User not found') {
            // Displaying error message
            this.errorMessage = 'User not found. Enter email linked with your OrderX.';
          } else {
            // Handling other errors
            this.errorMessage = 'An error occurred while adding the inventory.';
          }
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
  
}
