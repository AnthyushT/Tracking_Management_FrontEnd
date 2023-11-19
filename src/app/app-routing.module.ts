import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authorization/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './authorization/register/register.component';
import { ResetPasswordComponent } from './authorization/reset-password/reset-password.component';
import { OrderCreationComponent } from './order-management/order-creation/order-creation.component';
import { DisplayComponent } from './order-management/display/display.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CommonCardsComponent } from './shared/components/common-cards/common-cards.component';
import { InventoryDisplayComponent } from './warehouse-management/inventory-display/inventory-display.component';
import { CreateInventoryComponent } from './warehouse-management/create-inventory/create-inventory.component';
import { BuyWarehouseComponent } from './warehouse-management/buy-warehouse/buy-warehouse.component';
import { ListWarehousesComponent } from './warehouse-management/list-warehouses/list-warehouses.component';
import { TransferInventoryComponent } from './warehouse-management/transfer-inventory/transfer-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'order-creation',
    component: OrderCreationComponent
  },
  {
    path: 'order-display',
    component: DisplayComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'common',
    component: CommonCardsComponent
  },
  {
    path: 'inventory-display',
    component: InventoryDisplayComponent
  },
  {
    path: 'create-inventory',
    component: CreateInventoryComponent
  },
  {
    path: 'buy-warehouse',
    component: BuyWarehouseComponent
  },
  {
    path:'list-warehouses',
    component: ListWarehousesComponent
  },
  {
    path: 'transfer-inventory',
    component: TransferInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
