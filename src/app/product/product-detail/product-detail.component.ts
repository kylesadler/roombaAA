import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'product-detail-t',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductService, UserService]
})
export class ProductDetailComponent implements OnInit {
  @Input() id: string;
  productDetailsForm: FormGroup;
  isManager: boolean;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productDetailsForm = this.formBuilder.group({
      lookupCode: new FormControl({value: '', disabled: true}),
      name: new FormControl({value: '', disabled: true}),
      count: new FormControl({value: '', disabled: true})
    });
    this.userService.isManager()
      .then((isManager: boolean) => {
        this.isManager = isManager;
        if(isManager) {
          this.productDetailsForm.controls["name"].enable();
          this.productDetailsForm.controls["lookupCode"].enable();
          this.productDetailsForm.controls["count"].enable();
        }
      });
  }

  ngOnInit(): void {
    if(this.id) {
      this.productService.getProduct(this.id)
        .then((product: Product) => {
          console.log(product);
          this.productDetailsForm.controls["name"].setValue(product.name);
          this.productDetailsForm.controls["lookupCode"].setValue(product.lookupCode);
          this.productDetailsForm.controls["count"].setValue(product.count);
        });
    }
  }

  onSubmit(productData) {
    var p = new Product();
    p.name = productData.name;
    p.count = productData.count;
    p.lookupCode = productData.lookupCode;
    if(this.id) {
      this.productService.updateProduct(this.id, p)
        .then((result) => {
          if(result) {
            this.router.navigate(['/products']);
          }
        });
    }
    else {
      this.productService.addProduct(p)
        .then((result) => {
          if(result) {
            this.router.navigate(['/products']);
          }
        })
    }
  }

  deleteClicked() {
    this.productService.deleteProduct(this.id)
      .then((result) => {
        if(result) {
          this.router.navigate(['/products']);
        }
      })
  }
}
