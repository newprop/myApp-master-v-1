import { Component, OnInit } from '@angular/core';
import { Emergency } from '../../../Models/emergency';
import { EmergencyService } from '../../../services/emergency.service';

@Component({
  selector: 'app-emergency-details',
  templateUrl: './emergency-details.component.html',
  styleUrl: './emergency-details.component.css'
})
export class EmergencyDetailsComponent implements OnInit {

  public emergency: Emergency[] = [];

  constructor(private service: EmergencyService) { }

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

  DeletePatient(emergency: Emergency) {
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
