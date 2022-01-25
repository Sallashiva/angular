import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntractComponent } from './intract/intract.component';
import { MockAnComponent } from './mock-an/mock-an.component';
import { ObservedComponent } from './observed/observed.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {path:'template',component:TemplateComponent},
  {path:'reactive',component:ReactiveComponent},
  {path:'pipes',component:PipesComponent},
  {path:'observed',component:ObservedComponent},
  {path:'intract',component:IntractComponent},
  {path:'mock-an',component:MockAnComponent},
  { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  { path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  


  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
