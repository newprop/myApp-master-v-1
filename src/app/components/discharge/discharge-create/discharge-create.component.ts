import { Component } from '@angular/core';
import { Discharge } from '../../../Models/discharge';
import { DischargeService } from '../../../services/discharge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discharge-create',
  templateUrl: './discharge-create.component.html',
  styleUrl: './discharge-create.component.css'
})
export class DischargeCreateComponent {
  public discharge: Discharge = new Discharge();

  constructor(private dischargeService: DischargeService, private router: Router) { }

  onSubmit() {
    this.dischargeService.createDischarge(this.discharge).subscribe({
      next: () => {
        this.router.navigate(['/discharges']);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
