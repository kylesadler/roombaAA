import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'product-listing-t',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
  providers: [ProductService, UserService]
})
export class ProductListingComponent implements OnInit {
  products: Product[];
  isManager: boolean;

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {
    this.userService.isManager()
      .then((isManager: boolean) => {
        this.isManager = isManager;
      });
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .then((products: Product[]) => {
        this.products = products;
      });
  }
}
