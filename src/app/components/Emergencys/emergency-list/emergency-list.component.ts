import { Component } from '@angular/core';
import { Emergency } from '../../../Models/emergency';
import { EmergencyService } from '../../../services/emergency.service';

@Component({
  selector: 'app-emergency-list',
  templateUrl: './emergency-list.component.html',
  styleUrl: './emergency-list.component.css'
})
export class EmergencyListComponent {

  public emergency: Emergency[] = [];
  DeleteEmergency: any;
    GetEmergency: any;
  constructor(private service:EmergencyService) {

  }
  ngOnInit(): void {
    this.LoadData();

  }

  LoadData() {
    this.service.GetEmergencys().subscribe((response: Emergency[]) => {
      this.emergency = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
  




  DeleteProducts(emergency: Emergency) {
    let confirmDelete: boolean = confirm(`Delete ${emergency.emergencyId}?`);
    if (confirmDelete) {
      this.service.DeleteEmergency(emergency.emergencyId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });

    }
  }
}
