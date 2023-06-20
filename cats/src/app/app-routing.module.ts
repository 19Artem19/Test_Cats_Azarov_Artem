import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./start-page/start-page.module').then((m) => m.StartPageModule),
  },
  {
    path: 'cats',
    loadChildren: () =>
      import('./filter-cats/filter-cats.module').then(
        (m) => m.FilterCatsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
