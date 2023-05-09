import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  product!: Product;
  list!: Product[];


  constructor(private productService: ProductService, private router : Router) { }

  ngOnInit(): void {
    this.product =new Product();
    this.list = [];
  }

  add()
  {
    this.productService.add(this.product).subscribe(
      (data) => {this.router.navigate(['/home'])}
    );
  }

}
