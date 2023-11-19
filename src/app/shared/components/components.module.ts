import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { NgbCollapse, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonCardsComponent } from './common-cards/common-cards.component';



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    CommonCardsComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    NgbCollapse,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CommonCardsComponent
  ]
})
export class ComponentsModule { }
