import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from '../Models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private apiUrl = 'https://localhost:7055/api/staffs';
  constructor(private http: HttpClient) { }
  getStaffs(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl);
  }

  getStaff(id: number): Observable<Staff> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Staff>(url);
  }

  addStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.apiUrl, staff);
  }

  updateStaff(staff: Staff): Observable<any> {
    const url = `${this.apiUrl}/${staff.staffId}`;
    return this.http.put(url, staff);
  }

  deleteStaff(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
