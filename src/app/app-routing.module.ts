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
import { MyStoreComponent } from './pages/shop/my-store/my-store.component';
import { CategoryPageComponent } from './pages/company/category-page/category-page.component';
import { BrandPageComponent } from './pages/company/brand-page/brand-page.component';
import { CategoryBrandPageComponent } from './pages/company/category-brand-page/category-brand-page.component';
import { StoreCategoryBrandPageComponent } from './pages/shop/my-store/store-category-brand-page/store-category-brand-page.component';
import { StoreCategoryPageComponent } from './pages/shop/my-store/store-category-page/store-category-page.component';
import { StoreBrandPageComponent } from './pages/shop/my-store/store-brand-page/store-brand-page.component';
import { ProductDetailsComponent } from './pages/shop/my-store/product-details/product-details.component';
import { CompareComponent } from './pages/shop/my-store/compare/compare.component';
import { CreateOrderComponent } from './pages/shop/create-order/create-order.component';
import { OpenOrdersComponent } from './pages/shop/open-orders/open-orders.component';


const routes: Routes = [
		
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'shop/orders',
		component:OrdersComponent
	},
	{
		path:'shop/open-orders',
		component:OpenOrdersComponent
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
		path:'shop/create-order',
		component:CreateOrderComponent
	},
	{
		path:'shop/my-store',
		component:MyStoreComponent
	},

	{
		path:'shop/my-store/category-brand/:id',
		component:StoreCategoryBrandPageComponent
	},
	{
		path:'shop/my-store/category/:id',
		component:StoreCategoryPageComponent
	},
	{
		path:'shop/my-store/brand/:id',
		component:StoreBrandPageComponent
	},
	{
		path:'shop/my-store/category-brand',
		component:StoreCategoryBrandPageComponent
	},
	{
		path:'shop/my-store/category',
		component:StoreCategoryPageComponent
	},
	{
		path:'shop/my-store/brand',
		component:StoreBrandPageComponent
	},
	{
		path:'shop/my-store/product',
		component:ProductDetailsComponent
	},
	{
		path:'shop/my-store/compare',
		component:CompareComponent
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
		path:'catalog/category-brand/:id',
		component:CategoryBrandPageComponent
	},
	{
		path:'catalog/category/:id',
		component:CategoryPageComponent
	},
	{
		path:'catalog/brand/:id',
		component:BrandPageComponent
	},
	{
		path:'catalog/category-brand',
		component:CategoryBrandPageComponent
	},
	{
		path:'catalog/category',
		component:CategoryPageComponent
	},
	{
		path:'catalog/brand',
		component:BrandPageComponent
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
