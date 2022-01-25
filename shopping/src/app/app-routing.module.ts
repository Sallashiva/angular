import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AssigmentComponent } from './assigment/assigment.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'product',
  component:ProductComponent,
  data: {role: ['admin','user']},
 canActivate :[AuthGuard]
},
  
{
  path:'addproduct',
  component:AddproductComponent,
 data: {role: ['admin']},
 canActivate :[AuthGuard]
},
  {path:'assigment',component:AssigmentComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
