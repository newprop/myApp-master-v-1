import { BloodType } from "./blood-type";

export class Patient {
  patientId!: Number;
  name!: string;
  dob: Date = new Date();
  gender!: string;
  age?: Number;
  contactNo!: string;
  email?: string;
  address?: string;
  status!: string;
  insuranceInformation!: string;

 
  bloodTypeID?: Number;
  bloodType!: BloodType;;
}
