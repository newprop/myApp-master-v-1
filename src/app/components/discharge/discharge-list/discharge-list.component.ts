import { Component, OnInit } from '@angular/core';
import { Discharge } from '../../../Models/discharge';
import { DischargeService } from '../../../services/discharge.service';

@Component({
  selector: 'app-discharge-list',
  templateUrl: './discharge-list.component.html',
  styleUrl: './discharge-list.component.css'
})
export class DischargeListComponent implements OnInit {
  public discharges: Discharge[] = [];

  constructor(private dischargeService: DischargeService) { }

  ngOnInit(): void {
    this.loadDischarges();
  }

  loadDischarges(): void {
    this.dischargeService.getDischarges().subscribe(
      (data: Discharge[]) => {
        this.discharges = data;
      },
      (error: any) => {
        console.log('Observable emitted an error: ' + error);
      }
    );
  }
}
