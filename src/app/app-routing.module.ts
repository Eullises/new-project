import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './public/contact/contact.component';
import { HomeComponent } from './public/home/home.component';
import { ProductComponent } from './public/product/product.component';
import { SupportComponent } from './public/support/support.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'product', component:ProductComponent},
  { path:'support', component:SupportComponent},
  { path:'contact', component: ContactComponent},
  { path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
