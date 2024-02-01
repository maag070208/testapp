import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IframeComponent } from './components/iframe/iframe.component';

const routes: Routes = [
  {
    path: 'iframe',
    component: IframeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationsRoutingModule {}
