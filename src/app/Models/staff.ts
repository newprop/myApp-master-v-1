export class Staff {
  staffId: number=0;
  staffName: string='';
  designation: string='';
  address?: string;
  contactNo: string='';
  email: string='';
  shift!: ShiftType;
}

export enum ShiftType {
  Morning_6am_To_2pm = 'Morning_6am_To_2pm',
  Afternoon_2pm_To_10pm = 'Afternoon_2pm_To_10pm',
  Night_10pm_To_6am = 'Night_10pm_To_6am'
}
