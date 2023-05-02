import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild(ProductCardComponent)
  private x:ProductCardComponent;
  constructor() { }

  name="bonjour and hello"

  prop: boolean=false;
  message:string=''
  twoWayProp="Bonjour Two Way"
  prixMax:number;
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

  buy(prod:Product)
  {
    let i = this.listProdcut.indexOf(prod);
    this.listProdcut[i].quantity= this.listProdcut[i].quantity - 1; 
  }

  like(prod:Product)
  {
    let i = this.listProdcut.indexOf(prod);
    this.listProdcut[i].like +=1;
  }
  appStart()
  {
    this.x.start();
  }
  
    

}
