import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  name="bonjour and hello"

  prop: boolean=false;
  message:string=''
  twoWayProp="Bonjour Two Way"
  prixMax:number=0;
  methodeA(){return 68}
  listProdcut:Product[]=[];
  ngOnInit(): void {
    this.listProdcut=[
      {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
      {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
      {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, ]
  }
  show()
  {
    this.message = 'hiiii'
  }

  buy(i:number)
  {
    this.listProdcut[i].quantity= this.listProdcut[i].quantity - 1; 
  }

  like(i:number)
  {
    this.listProdcut[i].like +=1;
  }
 
  
    

}
