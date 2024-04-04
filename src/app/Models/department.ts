import { Doctor } from "./doctor";

export class Department {

  departmentId!: Number;
  name!: string;
  doctors: Doctor[] = [];
}
