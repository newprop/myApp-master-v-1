import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }
  apiUrl: string = "https://localhost:7055/api/Common";


  public GetShiftTypes(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetShiftType");
  }

  public GetGenders(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetGender");

  }

  public GetPatients(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetPatient");
  }

  public GetDepartments(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetDepartment");
  }


  public GetDoctors(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "/GetDoctor");
  }


  
}
