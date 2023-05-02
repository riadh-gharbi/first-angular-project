import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/product';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit , OnChanges {

  constructor() { }


  @Input() prod: Product = {id: 0, title: " ", price: null, quantity: null, like: null};
  @Input() pMax: number;
  @Output() likeEvent = new EventEmitter<Product>();
  @Output() buyEvent = new EventEmitter<Product>();
  ngOnInit(): void {
  }

  // replaces AJAX calls in html file
  ngOnChanges(changes : SimpleChanges): void {
    console.log(changes);
  }

  like()
  {
    console.log("from child");
    this.likeEvent.emit(this.prod);
  }
  buy()
  {
    this.buyEvent.emit(this.prod);
  }

  //For viewChild annotation
  start()
  {
    console.log("start from child");
  }
  //@Output from child to parent to send an event
  //using event emitter
  //Create like button in which we call a method like() that will emit an event
  

}
