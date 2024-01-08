import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './Pages/country/country.component';
import { CityComponent } from './Pages/city/city.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'country' },
  { path: 'country', component: CountryComponent },
  { path: 'city', component: CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
