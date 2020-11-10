import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { DashboardComponent } from './pages/shop/dashboard/dashboard.component';
import { CatalogComponent } from './pages/company/catalog/catalog.component';
import { BrandsComponent } from './pages/company/brands/brands.component';
import { CategoriesComponent } from './pages/company/categories/categories.component';
import { ProductsComponent } from './pages/company/products/products.component';
import { CartComponent } from './pages/stores/cart/cart.component';
import { HomeComponent } from './pages/stores/home/home.component';
import { CheckoutComponent } from './pages/stores/checkout/checkout.component';
import { OrderDetailsComponent } from './pages/shop/order-details/order-details.component';
import { OrdersComponent } from './pages/shop/orders/orders.component';


const routes: Routes = [
		
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'orders',
		component:OrdersComponent
	},
	{
		path:'order-details',
		component:OrderDetailsComponent
	},
	{
		path:'checkout',
		component:CheckoutComponent
	},
	{
		path:'register',
		component:RegisterComponent
	},
	
	{
		path:'shop/dashboard',
		component:DashboardComponent
	},
	{
		path:'catalog',
		component:CatalogComponent
	},
	{
		path:'catalog/all-categories',
		component:CategoriesComponent
	},
	{
		path:'catalog/all-brands',
		component:BrandsComponent
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'products',
		component:ProductsComponent
	},
	{
		path:'cart',
		component:CartComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
