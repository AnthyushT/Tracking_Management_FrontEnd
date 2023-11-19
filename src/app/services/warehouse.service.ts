import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  apiUrl: String = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  addInventory(inventory: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inventory_list/add`, inventory);
  }

  transferInventory(itemCategory: string, sourceWarehouseName: string, destinationWarehouseName: string, stockLevel: number): Observable<any> {
    const params = new HttpParams()
      .set('itemCategory', itemCategory)
      .set('sourceWarehouseName', sourceWarehouseName)
      .set('destinationWarehouseName', destinationWarehouseName)
      .set('stockLevel', stockLevel.toString());
    return this.http.post(`${this.apiUrl}/inventory_list/transfer`, {}, { params });
  }

  getInventoryByEmail(): Observable<any[]> {
    const email = sessionStorage.getItem('userEmail');
    return this.http.get<any[]>(`${this.apiUrl}/inventory_list/email/${email}`);
  }


  increaseStockLevel(inventoryId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/inventory_list/increase/${inventoryId}`, {});
  }

  decreaseStockLevel(inventoryId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/inventory_list/decrease/${inventoryId}`, {});
  }

  addWarehouse(warehouse: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/warehouse_list/add`, warehouse);
  }

  getWarehouseByLocation(location: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/warehouse_list/${location}`);
  }

  updateWarehouseCapacity(warehouse: any, warehouseId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/warehouse_list/${warehouseId}`, warehouse);
  }

  getWarehouseByEmail(): Observable<any[]> {
    const email = sessionStorage.getItem('userEmail');
    return this.http.get<any[]>(`${this.apiUrl}/warehouse_list/email/${email}`);
  }

  deleteWarehouse(warehouseId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/warehouse_list/delete/${warehouseId}`);
  }
}


