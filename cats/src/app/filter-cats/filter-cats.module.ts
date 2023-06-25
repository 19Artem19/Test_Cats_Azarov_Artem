import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { COMPONENTS } from './components';
import { FilterCatsRoutingModule } from './filter-cats-routing.module';

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule, FilterCatsRoutingModule,
        MatSelectModule,
        MatFormFieldModule,
        ReactiveFormsModule,
    ]
})
export class FilterCatsModule { }