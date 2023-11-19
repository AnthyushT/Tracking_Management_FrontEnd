import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { CarrierIntegrationModule } from './carrier-integration/carrier-integration.module';
import { NotificationAlertsModule } from './notification-alerts/notification-alerts.module';
import { OrderManagementModule } from './order-management/order-management.module';
import { WarehouseManagementModule } from './warehouse-management/warehouse-management.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    SharedModule,
    AuthorizationModule,
    CarrierIntegrationModule,
    NotificationAlertsModule,
    OrderManagementModule,
    WarehouseManagementModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
