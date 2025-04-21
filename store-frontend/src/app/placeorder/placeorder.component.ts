import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../model/category';
import { take } from 'rxjs';

@Component({
  selector: 'app-placeorder',
  standalone :false,
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceOrderComponent implements OnInit {
  name: string = '';
  price: any = '';
  category: string = '';

  // pImage: any = '';
  isEdit: boolean = false;
  errorMessage: string = '';
  pizzaId: any = '';
  quantity: number = 0;
  catgoryList: Array<Category> = [];
  categoryId: number = 0;
  buyquantity: number = 0;

  constructor(private service: ProductService, private arouter: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getCategoryList();
    this.arouter.params.subscribe((res: any) => {
      if (res?.id) {
        console.log("&&&&&&", res?.id)
        this.getProductById(res?.id);
      }
    })
  }

  getCategoryList(): void {
    this.service
      .getCategoryList()
      .pipe(take(1))
      .subscribe((res: any) => {
        console.log("**11**", res);
       // alert("hello")
        if (res && Array.isArray(res)) {
          this.catgoryList = res;
        }
      });
  }

  getProductById(id: any): void {
    this.service
      .getProductById(id)
      .pipe(take(1))
      .subscribe((res) => {
        if (res && res?.id) {
          this.categoryId = res?.category?.id;
          this.pizzaId = res?.id;
          this.name = res?.name;
          this.quantity = res?.quantity;
          this.category = res?.category;
          this.price = res?.price;
        }
      });
  }
  
  onBuy(): void {
    // console.log("**" ,this.buyquantity<=0)
    // return;
    if (parseInt(this.buyquantity.toString())> (parseInt(this.quantity.toString()))) {
      alert('Buy Quantity should not greater than available quantity')
      
      
      return;
    }
    if (parseInt(this.buyquantity.toString())<=0 ) {
      alert('Quantity should not zero or negative')
     
      return;
    }
    //condition for quantity
    const pCategory = this.catgoryList.find((item: Category) => item.id === parseInt(this.categoryId.toString()));
    const payload: any={
      name: this.name,
      price: this.price,
      category: pCategory,
      quantity:(this.quantity-this.buyquantity)
    }
  payload.id = this.pizzaId;
  console.log("***Payload***",payload)

      this.service.updateProduct(payload).subscribe((res: any) => {
        console.log('##res#####', res);
        if (res && res?.id) {
          alert('order placed ');
          this.service.navigateToLink('listproduct');
        }
      });
  }
}
