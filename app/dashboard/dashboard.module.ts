import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthGuard } from '../auth/auth-guard.service';

import { dashRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ 
    dashRouting,
    FormsModule,
    CommonModule
   ],
   providers: [AuthGuard],
  declarations: [ 
    DashboardComponent
  ]
})
export class DashModule { }
