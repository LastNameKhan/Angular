import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name="Aman Khan";
  product = {
  name : "iPhone 15",
  price : 789,
  color : "Red",
  discount: 8.5,
  inStock: 10,
  pImage: '/assets/images/iphone.jpeg'
  
}

getDiscountedPrice () {
  return this.product.price - (this.product.price * this.product.discount / 100)
}

}
