import { Component } from '@angular/core';
import { take } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addcategory',
  standalone :false,
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.css'
})
export class AddcategoryComponent {
  categoryName: string = '';
  description:string='';
  constructor(
    private service: ProductService
  ) {}

  addCategory(): void {
    if (this.categoryName === '') {
      alert("Please add category");
      return;
    }
    const body = {
      name: this.categoryName,
      description:this.description
    };
    this.service.addCategory(body).pipe(take(1)).subscribe((res) => {
      if (res) {
        alert('Category Added Successfully');
        this.service.navigateToLink('/adminDashboard');
      }
      console.log('>>>>>');
    });
  }
}
