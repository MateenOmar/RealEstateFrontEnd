import { Injectable } from '@angular/core';
import { UserForLogin, UserForRegister } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = environment.baseUrl;
  constructor(private http: HttpClient) {}

  authUser(user: UserForLogin) {
    return this.http.post(this.baseURL + '/account/login', user);
    // let userArray = [];
    // if (localStorage.getItem('Users')) {
    //   userArray = JSON.parse(localStorage.getItem('Users')!);
    // }
    // return userArray.find(
    //   (p: User) => p.userName === user.userName && p.password === user.password
    // );
  }

  registerUser(user: UserForRegister) {
    return this.http.post(this.baseURL + '/account/register', user);
  }
}
