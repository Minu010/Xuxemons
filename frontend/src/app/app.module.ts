import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ShopComponent } from './dashboard/shop/shop.component';
import { CollectionComponent } from './dashboard/collection/collection.component';
import { HospitalComponent } from './dashboard/hospital/hospital.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    ShopComponent,
    CollectionComponent,
    HospitalComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UsersService], // Proporciona UsersService aquí
  bootstrap: [AppComponent]
})
export class AppModule { }
