import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterCatsComponent } from './components';

const routes: Routes = [{ path: '', component: FilterCatsComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FilterCatsRoutingModule { }