import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'applications',
    loadChildren: () =>
      import('./modules/applications/applications.module').then(
        (m) => m.ApplicationsModule
      ),
  },
  {
    path: '**',
    redirectTo: '/applications',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
