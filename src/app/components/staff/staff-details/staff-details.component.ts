import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../Models/staff';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../../../services/staff.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.css'
})
export class StaffDetailsComponent implements OnInit {
  staff: Staff | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.staffService.getStaff(id).subscribe(
        (data: Staff) => {
          this.staff = data;
        },
        (error: any) => {
          console.error('Error fetching staff details:', error);
        }
      );
    }
  }

  editStaff(): void {
    if (this.staff) {
      this.router.navigate(['/staff/edit', this.staff.staffId]);
    }
  }
}
