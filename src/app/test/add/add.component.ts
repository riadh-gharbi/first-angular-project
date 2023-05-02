import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  product!: Product;
  list!: Product[];


  constructor() { }

  ngOnInit(): void {
    this.product =new Product();
    this.list = [];
  }
  onSubmit()
  {
    this.list.push(this.product);
    console.log(this.product);
  }
}
