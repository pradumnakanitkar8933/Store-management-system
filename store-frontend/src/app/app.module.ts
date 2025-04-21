import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SellerheaderComponent } from './sellerheader/sellerheader.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { BuyerheaderComponent } from './buyerheader/buyerheader.component';
import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { BuyerhomeComponent } from './buyerhome/buyerhome.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { FormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './placeorder/placeorder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { SellerguardService } from './guard/sellerguard.service';

import { BuyerguardService } from './guard/buyerguard.service';
import { SellerbuyerguardService } from './guard/sellerbuyerguard.service';


@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    AddproductComponent,
    SellerheaderComponent,
    AppheaderComponent,
    BuyerheaderComponent,
    SellerhomeComponent,
    BuyerhomeComponent,
    ApphomeComponent,
    LoginComponent,
    RegisterComponent,
    ListproductComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule

    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    AuthService,
    ProductService,
    SellerguardService,
    SellerbuyerguardService,
    BuyerguardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
