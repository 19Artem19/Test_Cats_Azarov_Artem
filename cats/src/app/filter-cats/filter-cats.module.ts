import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { COMPONENTS } from './components';

import { FilterCatsRoutingModule } from './filter-cats-routing.module';

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, FilterCatsRoutingModule]
})
export class FilterCatsModule { }