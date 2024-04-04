import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../Models/staff';
import { StaffService } from '../../../services/staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.css'
})
export class StaffListComponent implements OnInit {
  staffList: Staff[] = [];

  constructor(private staffService: StaffService, private router: Router) { }

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff(): void {
    this.staffService.getStaffs().subscribe(
      (data: Staff[]) => {
        this.staffList = data;
      },
      (error: any) => {
        console.error('Error fetching staff list:', error);
      }
    );
  }

  viewStaffDetails(id: number): void {
    this.router.navigate(['/staff/details', id]);
  }

  editStaff(id: number): void {
    this.router.navigate(['/staff/edit', id]);
  }

  deleteStaff(id: number): void {
    if (confirm('Are you sure you want to delete this staff member?')) {
      this.staffService.deleteStaff(id).subscribe(
        () => {
          console.log('Staff deleted successfully.');
          this.loadStaff();
        },
        (error: any) => {
          console.error('Error deleting staff:', error);
        }
      );
    }
  }
}
