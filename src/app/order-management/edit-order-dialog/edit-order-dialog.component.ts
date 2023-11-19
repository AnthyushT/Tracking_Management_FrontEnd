import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-edit-order-dialog',
  templateUrl: './edit-order-dialog.component.html',
  styleUrls: ['./edit-order-dialog.component.css']
})
export class EditOrderDialogComponent implements OnInit {
  editOrderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<EditOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.editOrderForm = this.fb.group({
      orderTitle: [this.data.order.orderTitle],
      orderCategory: [this.data.order.orderCategory],
      items: [this.data.order.items]
    });
  }


  closeDialog(): void {
    this.dialogRef.close();
  }

  editOrder(): void {
    this.orderService.editOrder(this.editOrderForm.value, this.data.order.orderId).subscribe(
      response => {
        console.log('Order edited successfully', response);
        window.alert(this.data.order.orderTitle + ' Order updated successfully');
        this.dialogRef.close();
      },
      err => console.log('Error editing order', err)
    );
  }
}
