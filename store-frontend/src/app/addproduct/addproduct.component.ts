import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent implements OnInit{

  name: string = '';
  price: any = '';
  category: string = '';

  pImage: any = '';
  isEdit: boolean = false;
  errorMessage: string = '';
  pizzaId: any = '';
  quantity:number=0;
  catgoryList: Array<Category> = [];
  categoryId: number = 0;

  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    
    this.getCategoryList();
    setTimeout(() => {
      this.activatedRoute.queryParams.subscribe((res: any) => {
        console.log('>>>>>>>>', res);
        if (res && res?.pid) {
          this.isEdit = true;
          this.getProductById(res?.pid);
        }
      });
    }, 1000);

  }

  getCategoryList(): void {
    this.service
      .getCategoryList()
      .pipe(take(1))
      .subscribe((res: any) => {
        console.log("**11**",res);
       
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
          this.quantity=res?.quantity;
          this.category = res?.category;
          // this.pImage = res?.pImage;
          this.price = res?.price;
        }
      });
  }
  addUpdateProudcut(): any {
    
    if (this.name === '') {
      alert('name should not be blank')
      this.errorMessage = 'name should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    if (this.price === '') {
      alert('Product Price should not be blank')
      this.errorMessage = 'Product Price should not be blank';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
   
    if (parseInt(this.quantity.toString())<=0 ) {
      alert('Quantity should not zero')
      this.errorMessage = 'Quantity should not zero';
      document.getElementById('errordiv')?.scrollIntoView(true);
      return;
    }
    
    const pCategory = this.catgoryList.find((item: Category) => item.id === parseInt(this.categoryId.toString()));
    const body: any = {
      name: this.name,
      price: this.price,
      category: pCategory,
      quantity:this.quantity
      // pImage: this.pImage,
    };
    if (!this.isEdit) {
      this.service
        .addProduct(body)
        .pipe(take(1))
        .subscribe((res: any) => {
          if (res && res?.id) {
            alert('Product Added successfully');
            this.service.navigateToLink('listproduct');
          }
        });
    } else {
      body.id = this.pizzaId;
      this.service.updateProduct(body).subscribe((res: any) => {
        console.log('##res#####', res);
        if (res && res?.id) {
          alert('Product Updated successfully');
          this.service.navigateToLink('listproduct');
        }
      });
    }
  }

}