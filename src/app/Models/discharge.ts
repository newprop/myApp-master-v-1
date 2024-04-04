export class Discharge {
  dischargeId: number =0;
  patientID: number =0;
  admissionID: number =0;
  dischargeDate: Date =new Date();
  reason?: string;
  dischargeInstructions?: string;
}

