import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(orderData: any): Observable<any> {
    return this.http.post('http://localhost:8080/orders_list/save', orderData);
  }

  getOrdersByEmail(): Observable<any> {
    const email = sessionStorage.getItem('userEmail');
    return this.http.get('http://localhost:8080/orders_list/email/' + email);
  }

  editOrder(orderData: any, orderId: string): Observable<any> {
    return this.http.put('http://localhost:8080/orders_list/edit/' + orderId, orderData);
  }

  cancelOrder(orderId: string): Observable<any> {
    console.log(orderId);
    return this.http.delete('http://localhost:8080/orders_list/cancel/' + orderId);
  }

}
