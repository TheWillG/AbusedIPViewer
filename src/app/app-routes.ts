import { Routes } from '@angular/router';
import { CheckComponent } from './components/check/check.component';
import { HomeComponent } from './components/app-home/app-home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'check/:ip', component: CheckComponent }
];
