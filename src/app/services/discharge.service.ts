import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discharge } from '../Models/discharge';

@Injectable({
  providedIn: 'root'
})
export class DischargeService {


  constructor(private http: HttpClient) { }
  private apiUrl = 'api/discharges';
  // GET: Get all discharges
  getDischarges(): Observable<Discharge[]> {
    return this.http.get<Discharge[]>(this.apiUrl);
  }

  // GET: Get discharge by ID
  getDischarge(id: number): Observable<Discharge> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Discharge>(url);
  }

  // POST: Create a new discharge
  createDischarge(discharge: Discharge): Observable<Discharge> {
    return this.http.post<Discharge>(this.apiUrl, discharge);
  }

  // PUT: Update an existing discharge
  updateDischarge(discharge: Discharge): Observable<any> {
    const url = `${this.apiUrl}/${discharge.dischargeId}`;
    return this.http.put(url, discharge);
  }

  // DELETE: Delete a discharge
  deleteDischarge(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
