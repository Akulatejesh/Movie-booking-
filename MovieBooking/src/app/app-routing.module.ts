import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { BookingComponent } from './booking/booking.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [{path:'customers',component:CustomerComponent},
{path:'booking',component:BookingComponent}
,{path:'catalogue',component:CatalogueComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents=[CustomerComponent,BookingComponent,CatalogueComponent];
