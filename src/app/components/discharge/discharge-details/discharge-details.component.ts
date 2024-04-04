import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../../Models/discharge';
import { DischargeService } from '../../../services/discharge.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discharge-details',
  templateUrl: './discharge-details.component.html',
  styleUrl: './discharge-details.component.css'
})
export class DischargeDetailsComponent implements OnInit {
  public discharge: Discharge = new Discharge();
  public id!: number;

  constructor(
    private dischargeService: DischargeService,
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
}
