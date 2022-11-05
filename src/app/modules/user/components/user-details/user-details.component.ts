import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUser} from "../../interfaces";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  user: IUser;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({user}) => this.user = user)
  }

}