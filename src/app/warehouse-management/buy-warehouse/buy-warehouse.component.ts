import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WarehouseService } from 'src/app/services/warehouse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-warehouse',
  templateUrl: './buy-warehouse.component.html',
  styleUrls: ['./buy-warehouse.component.css']
})
export class BuyWarehouseComponent implements OnInit {
  warehouseForm = new FormGroup({
    warehouseName: new FormControl('', Validators.required),
    warehouseLocation: new FormControl('', Validators.required),
    warehouseCapacity: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  errorMessage: string = ''; 

  constructor(private warehouseService: WarehouseService, private router: Router) { }

  ngOnInit(): void {
  }

  onWarehouseChange(event: any) {
    let warehouseName = (event.target as HTMLSelectElement).value;
    let capacity;
    switch (warehouseName) {
      case 'SuperSpace':
        capacity = 2000;
        break;
      case 'LargeStorage':
        capacity = 2500;
        break;
      case 'BigSpace':
        capacity = 3000;
        break;
      case 'MySpace':
        capacity = 1500;
        break;
      case 'MindSpace':
        capacity = 1000;
        break;
    }
    
    let warehouseCapacityControl = this.warehouseForm.get('warehouseCapacity');
    if (warehouseCapacityControl) {
        warehouseCapacityControl.setValue(capacity ? capacity.toString() : null);
    }
  }

  onSubmit(): void {
    if (this.warehouseForm.valid) {
      this.warehouseService.addWarehouse(this.warehouseForm.value).subscribe(
        response => {
          console.log(this.warehouseForm.value);
          console.log('Warehouse bought!', response);
          window.alert(this.warehouseForm.value.warehouseName+' Warehouse taken for Lease Successfully');
          this.router.navigate(['/common']);
        } ,
        err => {
          console.log('Error buying warehouse', err);
          if (err.error.message === 'User not found.') {
            // Displaying error message
            this.errorMessage = 'User not found. Please confirm your OrderX linked mail.';
          } else {
            // Handling other errors
            this.errorMessage = 'An error occurred while buying the warehouse.';
          }
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

}
