import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactformComponent } from './reactform/reactform.component';
import { CurdcaseComponent } from './curdcase/curdcase.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactformComponent,
    CurdcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
