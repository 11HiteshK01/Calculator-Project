import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalCComponent } from './cal-c/cal-c.component';
import { FormulaCartComponent } from './formula-cart/formula-cart.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {path: 'navigation', component:NavigationComponent},
  {path: 'formula-cart', component:FormulaCartComponent},
  {path: 'cal-c', component:CalCComponent},
  {path: '', component:FormulaCartComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
