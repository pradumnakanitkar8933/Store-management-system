import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApphomeComponent } from './apphome/apphome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SellerguardService } from './guard/sellerguard.service';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ListproductComponent } from './listproduct/listproduct.component';

import { BuyerguardService } from './guard/buyerguard.service';
import { BuyerhomeComponent } from './buyerhome/buyerhome.component';
import { PlaceOrderComponent } from './placeorder/placeorder.component';
import { SellerbuyerguardService } from './guard/sellerbuyerguard.service';

const routes: Routes = [
  { path: '', component: ApphomeComponent },
  { path: 'login', component: LoginComponent },
  { path :'register', component:RegisterComponent},
  { path: 'addproduct', component : AddproductComponent, canActivate : [SellerguardService]},
  { path : 'sellerdashboard', component : SellerhomeComponent,canActivate : [SellerguardService]},
  { path : 'add-category', component : AddcategoryComponent, canActivate : [SellerguardService]},
  { path : 'listproduct', component : ListproductComponent, canActivate : [SellerbuyerguardService]},
  { path : 'buyerhome', component: BuyerhomeComponent, canActivate : [BuyerguardService]},
  { path : 'placeorder/:id',component : PlaceOrderComponent, canActivate : [BuyerguardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
