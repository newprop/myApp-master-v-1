import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Emergency } from '../Models/emergency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {

  constructor(private http: HttpClient) { }
  apiUrl: string = 'https://localhost:7055/api/emergencies';

  public GetEmergencys(): Observable<Emergency[]> {

    return this.http.get<Emergency[]>(this.apiUrl);
  }
  public GetEmergency(id: number): Observable<Emergency> {

    return this.http.get<Emergency>(this.apiUrl + '/' + id);
  }
  public SaveEmergency(Emergency: any): Observable<any> {

    return this.http.post(this.apiUrl, Emergency);
  }
  public UpdateEmergency(Emergency: Emergency): Observable<Emergency> {

    return this.http.put<Emergency>(this.apiUrl + '/' + Emergency.emergencyId, Emergency);
  }
  public DeleteEmergency(id: any): Observable<any> {

    return this.http.delete(this.apiUrl + '/' + id);
  }
}
