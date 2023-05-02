import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor() { }

  product! : Product;

  List!:Product[];

id  = "aa";
  ngOnInit(): void {
  }

}
