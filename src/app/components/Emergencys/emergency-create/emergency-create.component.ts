import { Component, OnInit } from '@angular/core';
import { Emergency } from '../../../Models/emergency';
import { EmergencyService } from '../../../services/emergency.service';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-emergency-create',
  templateUrl: './emergency-create.component.html',
  styleUrl: './emergency-create.component.css'
})
export class EmergencyCreateComponent implements OnInit {

  public model!: Emergency;
  /*public patient!: patient;*/


  constructor(private Service: EmergencyService, private router: Router,private commonapi:CommonService) {

  }
  ngOnInit(): void {
    this.model = new Emergency();
  }


  OnSubmit() {
    alert(JSON.stringify(this.model));
    this.Service.SaveEmergency(this.model).subscribe({
      next: () => {
        this.router.navigate([""]);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
