import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownComponent } from './components/countdown/countdown.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'countdown',
    component: CountdownComponent,
    title: 'Countdown - Radiography Resource Network',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home - Radiography Resource Network',
  },
  { path: '', redirectTo: '/countdown', pathMatch: 'full' },
  { path: '**', redirectTo: '/countdown', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
