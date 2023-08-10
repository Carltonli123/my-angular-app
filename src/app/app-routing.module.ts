import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdyenComponentComponent } from './adyen-component/adyen-component.component';
import { SecondlevelComponent } from './secondlevel/secondlevel.component'

const routes: Routes = [
  { path: 'checkout', component: AdyenComponentComponent },
  { path: 'someotherpath/secondlevel', component: SecondlevelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
