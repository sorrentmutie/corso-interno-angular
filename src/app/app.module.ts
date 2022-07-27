import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products/pages/products-page/products-page.component';
import { ProductsListComponent } from './products/components/products-list/products-list.component';
import { FirstPipe } from './products/pipes/first.pipe';
import { SecondPipe } from './products/pipes/second.pipe';
import { OrdersListComponent } from './orders/components/orders-list/orders-list.component';
import { OrdersPageComponent } from './orders/pages/orders-page/orders-page.component';
import { SharedFirstComponent } from './shared/components/shared-first/shared-first.component';
import { OrderDetailsComponent } from './orders/components/order-details/order-details.component';
import { SharedSecondComponent } from './shared/components/shared-second/shared-second.component';
import { ProductsService } from './products/services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductsListComponent,
    FirstPipe,
    SecondPipe,
    OrdersListComponent,
    OrdersPageComponent,
    SharedFirstComponent,
    OrderDetailsComponent,
    SharedSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
