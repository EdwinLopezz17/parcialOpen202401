import { Routes } from '@angular/router';
import {HomeComponent} from "./home/pages/home/home.component";
import {MentalStateExamsComponent} from "./exams/pages/mental-state-exams/mental-state-exams.component";
import {PageNotFoundComponent} from "./home/pages/page-not-found/page-not-found.component";

export const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component:HomeComponent},
  {path: 'nursing/mental-state-exams', component:MentalStateExamsComponent},




  {path: '**', component:PageNotFoundComponent}


];
