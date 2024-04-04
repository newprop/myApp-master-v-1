import { Component } from '@angular/core';
import { ShiftType, Staff } from '../../../Models/staff';
import { StaffService } from '../../../services/staff.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-staff-create',
  templateUrl: './staff-create.component.html',
  styleUrl: './staff-create.component.css'
})
export class StaffCreateComponent {
  model: Staff = new Staff();
  readonly ShiftType = ShiftType;
  constructor(private staffService: StaffService) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.staffService.addStaff(this.model).subscribe({
        next: () => {
          console.log('Staff added successfully.');
          form.resetForm();
        },
        error: (err: any) => {
          console.error('Error adding staff:', er
        }
      });
    }
  }
}
