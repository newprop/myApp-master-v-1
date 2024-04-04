import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmergencyCreateComponent } from './components/Emergencys/emergency-create/emergency-create.component';
import { EmergencyListComponent } from './components/Emergencys/emergency-list/emergency-list.component';
import { EmergencyEditComponent } from './components/Emergencys/emergency-edit/emergency-edit.component';
import { EmergencyDetailsComponent } from './components/Emergencys/emergency-details/emergency-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DischargeCreateComponent } from './components/discharge/discharge-create/discharge-create.component';
import { DischargeEditComponent } from './components/discharge/discharge-edit/discharge-edit.component';
import { DischargeListComponent } from './components/discharge/discharge-list/discharge-list.component';
import { DischargeDetailsComponent } from './components/discharge/discharge-details/discharge-details.component';
import { StaffCreateComponent } from './components/staff/staff-create/staff-create.component';
import { StaffEditComponent } from './components/staff/staff-edit/staff-edit.component';
import { StaffListComponent } from './components/staff/staff-list/staff-list.component';
import { StaffDetailsComponent } from './components/staff/staff-details/staff-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmergencyCreateComponent,
    EmergencyListComponent,
    EmergencyEditComponent,
    EmergencyDetailsComponent,
    DischargeCreateComponent,
    DischargeEditComponent,
    DischargeListComponent,
    DischargeDetailsComponent,
    StaffCreateComponent,
    StaffEditComponent,
    StaffListComponent,
    StaffDetailsComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
