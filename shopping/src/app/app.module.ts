import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AssigmentComponent } from './assigment/assigment.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CustompipePipe } from './custompipe.pipe';
import { InterceptInterceptor } from './intercept.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SpinnerComponent,
    AddproductComponent,
    AssigmentComponent,
    RegisterComponent,
    LoginComponent,
    CustompipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide :HTTP_INTERCEPTORS,
      useClass:InterceptInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
