import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { EditOrderDialogComponent } from 'src/app/order-management/edit-order-dialog/edit-order-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayedColumns: string[] = ['orderTitle', 'orderCategory', 'items', 'actions'];
  orders = new MatTableDataSource<any>([]);
  errorMessage: string = '';

  constructor(private orderService: OrderService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrdersByEmail().subscribe(
      response => {
        if (response.length === 0) { // If no orders are found
          this.errorMessage = 'No orders found. Please place an order.';
        } else {
          this.orders.data = response;
        }
        this.getOrders();
      },
      err => console.log('Error getting orders', err)
    );
  }

  editOrder(order: any): void {
    const dialogRef = this.dialog.open(EditOrderDialogComponent, {
      width: '450px',
      data: { order: order }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getOrders(); // re-render
    });
  }

  cancelOrder(order: any): void {
    if(confirm("Are you sure you want cancel the " + order.orderTitle+ " order.")) {
      this.orderService.cancelOrder(order.orderId).subscribe(
        response => {
          console.log('Order cancelled successfully', response);
          this.getOrders(); // re-render
        },
        err => console.log('Error cancelling order', err)
      );
    }
  }
}
