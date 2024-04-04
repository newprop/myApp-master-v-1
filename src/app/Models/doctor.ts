import { Department } from "./department";

export class Doctor {
  doctorId!: Number;
  name!: string;
  specialization!: string;
  contactNo!: Number;
  email!: string;
  schedule?: string;
  image?: string;
  shift!: string;
  departmentID?: Number;
  department!: Department;
}
