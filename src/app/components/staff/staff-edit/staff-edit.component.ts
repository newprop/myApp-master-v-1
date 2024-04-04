import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../Models/staff';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../../../services/staff.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrl: './staff-edit.component.css'
})
export class StaffEditComponent implements OnInit {
  staff: Staff | undefined;
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private staffService: StaffService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.staffService.getStaff(this.id).subscribe(
        (data: Staff) => {
          this.staff = data;
        },
        (error: any) => {
          console.error('Error fetching staff details:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.staff) {
      this.staffService.updateStaff(this.staff).subscribe(
        () => {
          console.log('Staff updated successfully.');
          this.router.navigate(['/staff']);
        },
        (error: any) => {
          console.error('Error updating staff:', error);
        }
      );
    }
  }
}
