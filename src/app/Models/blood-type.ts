import { Patient } from "./patient";

export class BloodType {
  bloodTypeId!: Number;
  name!: string;
  patientID?: Number;
  patient!: Patient;

}
