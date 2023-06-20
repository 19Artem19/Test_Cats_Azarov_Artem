import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { COMPONENTS } from './components';
import { StartPageRoutingModule } from './start-page-routing.module';

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    StartPageRoutingModule,
  ],
})
export class StartPageModule {}