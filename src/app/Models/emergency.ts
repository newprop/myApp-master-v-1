import { Department } from "./department";
import { Doctor } from "./doctor";
import { EmergencyPrescribe } from "./emergency-prescribe";
import { Patient } from "./patient";

export class Emergency {


  emergencyId!: Number ;
  patientID!: Number;
  doctorId!: Number;
  departmentID!: Number ; 
  prescribeID!: Number ; 
  location: string = '';
  emergencyDateTime: Date = new Date();
  description: string = '';
  severity: string = '';
  status: string = '';
     
  emergencyPrescribe!: EmergencyPrescribe;
  doctor!: Doctor;
  department!: Department;
  patient!: Patient;
}



