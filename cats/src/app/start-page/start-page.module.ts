import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'; 

import { COMPONENTS } from './components';
import { StartPageRoutingModule } from './start-page-routing.module';

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    StartPageRoutingModule,
    MatButtonModule
  ],
})
export class StartPageModule {}