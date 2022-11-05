import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {UserService} from "../user.service";
import {IUser} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {

  constructor(private userService:UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    const {id} = route.params;
    return this.userService.getById(id)
  }
}