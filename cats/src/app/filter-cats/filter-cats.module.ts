import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { COMPONENTS } from './components';

import { FilterCatsRoutingModule } from './filter-cats-routing.module';

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, FilterCatsRoutingModule,FormsModule]
})
export class FilterCatsModule { }