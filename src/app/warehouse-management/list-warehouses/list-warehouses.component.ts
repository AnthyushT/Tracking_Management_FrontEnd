import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WarehouseService } from 'src/app/services/warehouse.service';

@Component({
  selector: 'app-list-warehouses',
  templateUrl: './list-warehouses.component.html',
  styleUrls: ['./list-warehouses.component.css']
})
export class ListWarehousesComponent implements OnInit {
  displayedColumns: string[] = ['warehouseName', 'warehouseLocation', 'warehouseCapacity', 'actions'];
  warehouses = new MatTableDataSource<any>([]);
  errorMessage: String = "";

  constructor(private warehouseService: WarehouseService) { }

  ngOnInit(): void {
    this.getWarehouses();
  }

  getWarehouses(): void {
    this.warehouseService.getWarehouseByEmail().subscribe(
      response => {
        this.warehouses.data = response;
      },
      err => {
        console.log('Error getting warehouses', err);
      }
    );
  }

  deleteWarehouse(warehouseId: string): void {
    if (window.confirm('Are you sure you want to end the lease period with this warehouse?')) {
      this.warehouseService.deleteWarehouse(warehouseId).subscribe(
        response => {
          console.log('Warehouse deleted!', response);
          window.alert('You have successfully ended the lease period with this warehouse!');
          this.getWarehouses();  // Refresh the list after deletion
        },
        err => {
          console.log('Error deleting warehouse', err);
        }
      );
    }
  }

}


