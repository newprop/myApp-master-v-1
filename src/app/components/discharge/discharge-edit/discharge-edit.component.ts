import { Component, OnInit } from '@angular/core';
import { DischargeService } from '../../../services/discharge.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Discharge } from '../../../Models/discharge';

@Component({
  selector: 'app-discharge-edit',
  templateUrl: './discharge-edit.component.html',
  styleUrl: './discharge-edit.component.css'
})
export class DischargeEditComponent implements OnInit {
  public discharge: Discharge = new Discharge();
  public id!: number;

  constructor(
    private dischargeService: DischargeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadData();
  }

  loadData(): void {
    this.dischargeService.getDischarge(this.id).subscribe(
      (data: Discharge) => {
        this.discharge = data;
      },
      (error: any) => {
        console.log('Observable emitted an error: ' + error);
      }
    );
  }

  onSubmit(): void {
    this.dischargeService.updateDischarge(this.discharge).subscribe({
      next: () => {
        this.router.navigate(['/discharges']);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
