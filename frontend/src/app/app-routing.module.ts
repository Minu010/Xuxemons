import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './dashboard/shop/shop.component';
import { CollectionComponent } from './dashboard/collection/collection.component';
import { HospitalComponent } from './dashboard/hospital/hospital.component';
import { InventoryComponent } from './dashboard/inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirigir a '/home' por defecto
  { path: 'home', component: HomeComponent }, // Asignar el componente que quieres mostrar en la ruta '/home'
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
    { path: 'shop', component: ShopComponent },
    { path: 'collection', component: CollectionComponent },
    { path: 'hospital', component: HospitalComponent },
    { path: 'inventary', component: InventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
