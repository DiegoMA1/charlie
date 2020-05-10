import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service'
import {User} from '../../../interfaces/user'
import { product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: User;
  product: product;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.users[0];
  }
  findElement(i){
    console.log(i);
    this.userService.removeProduct(i);
  }
  findProduct(index){
    this.userService.findProduct(index);
    console.log(this.product)
  }

}
