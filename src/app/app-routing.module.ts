import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdyenComponentComponent } from './adyen-component/adyen-component.component';

const routes: Routes = [
  { path: 'checkout', component: AdyenComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
