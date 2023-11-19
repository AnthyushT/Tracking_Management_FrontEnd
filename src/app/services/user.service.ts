import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoggedIn = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string){
    return this.http.get<any>('http://localhost:8080/users_list/getByEmail/'+email);
  }

  addUser(user: any) {
    return this.http.post('http://localhost:8080/users_list/save', user,{responseType:'text'});
  }

  login(user: any) {
    return this.http.post<any>('http://localhost:8080/users_list/login', user);
  }

  resetPassword(payload: {email: string, oldPassword: string, newPassword: string}): Observable<any> {
    return this.http.post('http://localhost:8080/users_list/resetPassword', payload);
  }

  setSessionStorage(user:any){
    console.log(user);
    sessionStorage.setItem("userData",JSON.stringify(user));
  }
 
  removeSessionStorage(){
    sessionStorage.clear();
  }

  
  
}
