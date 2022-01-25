import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustompipePipe } from './custompipe.pipe';
import { ObservedComponent } from './observed/observed.component';
import { IntractComponent } from './intract/intract.component';
import { MockAnComponent } from './mock-an/mock-an.component';
import { MchildComponent } from './mchild/mchild.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ReactiveComponent,
    PipesComponent,
    CustompipePipe,
    ObservedComponent,
    IntractComponent,
    MockAnComponent,
    MchildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  

  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
