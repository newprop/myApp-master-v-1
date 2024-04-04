import { Component } from '@angular/core';
import { Emergency } from '../../../Models/emergency';
import { ActivatedRoute, Router } from '@angular/router';
import { EmergencyService } from '../../../services/emergency.service';

@Component({
  selector: 'app-emergency-edit',
  templateUrl: './emergency-edit.component.html',
  styleUrl: './emergency-edit.component.css'
})
export class EmergencyEditComponent {

  public model!: Emergency;
  id!: number;

  constructor(private Service:EmergencyService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.LoadData();


  }


  OnSubmit() {


    this.Service.UpdateEmergency(this.model).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error:(err: any) => {
        console.log(err);
      }
    });

  }

  LoadData() {
    this.Service.GetEmergency(this.id).subscribe((data: Emergency) => {
      this.model = data;
      console.log(data);
    }, (error: string) => {
      console.log('Observable emitted an error: ' + error);
    });
  }
 
}
