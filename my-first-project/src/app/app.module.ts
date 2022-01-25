import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { Query1Component } from './query1/query1.component';
import { Query2Component } from './query2/query2.component';
import { PlacesComponent } from './places/places.component';
import { ChangecolorDirective } from './changecolor.directive';
import { LoginseconComponent } from './loginsecon/loginsecon.component';
import { CustomgmailComponent } from './customgmail/customgmail.component';

let routes:Routes = [
  {path:'directives',component:DirectivesComponent},
  {path:'parent',component:ParentComponent},
  {path:'query1',component:Query1Component},
  {path:'places',component:PlacesComponent},
  {path:'demo',component:DemoComponent},
  {path:'first',component:FirstComponent},
  {path:'second',component:SecondComponent},
  {path:'loginsecon',component:LoginseconComponent},
  {path:'customgmail',component:CustomgmailComponent}
] 


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SampleComponent,
    DemoComponent,
    DirectivesComponent,
    ChildComponent,
    ParentComponent,
    HeaderComponent,
    FirstComponent,
    SecondComponent,
    Query1Component,
    Query2Component,
    PlacesComponent,
    ChangecolorDirective,
    LoginseconComponent,
    CustomgmailComponent
  
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
