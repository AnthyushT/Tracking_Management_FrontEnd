import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-order-creation',
  templateUrl: './order-creation.component.html',
  styleUrls: ['./order-creation.component.css']
})
export class OrderCreationComponent implements OnInit {
  orderForm = new FormGroup({
    orderTitle: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    orderCategory: new FormControl('', Validators.required),
    items: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])
  });
  errorMessage: string = ''; 
  hasInventory: boolean = false;

  constructor(private orderService: OrderService, private router: Router, private inventoryService: WarehouseService) { }

  ngOnInit(): void {
    this.checkInventory();
  }

  checkInventory(): void {
    this.inventoryService.getInventoryByEmail().subscribe(
      response => {
        this.hasInventory = true; // If inventory exists
      },
      err => {
        this.errorMessage = 'No Inventory in your Warehouse, add Inventory in your warehouse to place an order.'; // If inventory does not exist
      }
    );
  }

  onSubmit(): void {
    if (this.orderForm.valid) {
        this.orderService.createOrder(this.orderForm.value).subscribe(
            response => {
                console.log('Order created!', response);
                window.alert(this.orderForm.value.orderTitle+' Order Created Successfully');
                this.router.navigate(['/common']);
            },
            err => {
                console.log('Error creating order', err);
                if (err.error.message === "User not found") {
                    // Displaying error message
                    this.errorMessage = 'You are not a user. Please sign up.';
                } else if (err.error.message === 'Not enough stock') {
                    // Displaying error message
                    this.errorMessage = 'Not enough stock to fulfill the order.';
                } else if(err.error.message === 'Failed to update inventory') {
                    console.log(this.orderForm.value)
                    this.errorMessage = 'Failed to update';
                }
                else if(err.error.message === 'Inventory not found') {
                    console.log(this.orderForm.value)
                    this.errorMessage = 'Inventory not found';
                }
                else{
                    // Handling other errors
                    this.errorMessage = 'An error occurred while creating the order.';
                }
            }
        );
    } else {
        console.log('Form is not valid');
    }
}

}
