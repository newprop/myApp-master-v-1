import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyListComponent } from './components/Emergencys/emergency-list/emergency-list.component';
import { EmergencyCreateComponent } from './components/Emergencys/emergency-create/emergency-create.component';
import { EmergencyDetailsComponent } from './components/Emergencys/emergency-details/emergency-details.component';
import { EmergencyEditComponent } from './components/Emergencys/emergency-edit/emergency-edit.component';
import { DischargeListComponent } from './components/discharge/discharge-list/discharge-list.component';
import { DischargeCreateComponent } from './components/discharge/discharge-create/discharge-create.component';
import { DischargeDetailsComponent } from './components/discharge/discharge-details/discharge-details.component';
import { DischargeEditComponent } from './components/discharge/discharge-edit/discharge-edit.component';
import { StaffListComponent } from './components/staff/staff-list/staff-list.component';
import { StaffCreateComponent } from './components/staff/staff-create/staff-create.component';
import { StaffDetailsComponent } from './components/staff/staff-details/staff-details.component';
import { StaffEditComponent } from './components/staff/staff-edit/staff-edit.component';


const routes: Routes = [

  
  { path: "", redirectTo: "/EmergencyList", pathMatch: "full" },
  { path: "EmergencyList", component: EmergencyListComponent },
  { path: "EmergencyCreate/create", component:EmergencyCreateComponent },
  { path: "EmergencyDetails/details/:id", component: EmergencyDetailsComponent },
  { path: "EmergencyEdit/edit/:id", component: EmergencyEditComponent },
  { path: "dischargeList", component: DischargeListComponent },
  { path: "dischargeCreate/create", component: DischargeCreateComponent },
  { path: "dischargeDetails/details/:id", component: DischargeDetailsComponent },
  { path: "dischargeEdit/edit/:id", component: DischargeEditComponent },
 /* { path: "", redirectTo: "/dischargeList", pathMatch: "full" },*/
  { path: "staffList", component: StaffListComponent },
  { path: "staffCreate/create", component: StaffCreateComponent },
  { path: "staffDetails/details/:id", component: StaffDetailsComponent },
  { path: "staffEdit/edit/:id", component: StaffEditComponent }
  


  /*{ path: 'list', component: EmergencyListComponent },*/
  /*{ path: '', redirectTo: "list", pathMatch: 'full' },*/
  /*{ path: '**', redirectTo: "" },*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
